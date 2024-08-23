import User from '@/server/models/users'
import { stripe } from "@/server/utils/stripe"

export default defineEventHandler(async (event) => {
    try {

        if (event.req.method === 'POST') {
            const body = await readBody(event)
            const rawBody = await readRawBody(event)
            const headers = await getRequestHeaders(event)

            const eventType = body.type
            const sign = headers['stripe-signature']

            // if there's no body of request / no signature / no event name provided - throw an error
            if (!rawBody || !sign || !eventType) throw new Error('One of required parameters is missing')

            // if the signature of request is not validated -  throw an error
            if (!(await stripe.signRequest(rawBody, sign))) throw new Error('Request was not validated')

            const customerId = body.data.object.customer
            const customerEmail = body.data.object.customer_details?.email || body.data.object.customer_email

            // else everything's validated and we proccess the webhook
            if (eventType === 'checkout.session.completed' || eventType === 'invoice.paid') {
                
                var productId, priceId;
                
                if(eventType === 'checkout.session.completed') {
                    var { productId, priceId } = await stripe.getProductDetailsFromPaymentLink(body.data.object.payment_link)
                } else {
                    productId = body.data.object.lines.data[0].price.product
                    priceId = body.data.object.lines.data[0].price.id
                }


                const user: any = await User.findOne({ where: { user_email: `${customerEmail}` } })
                
                if(!user) {
                    const newUser = await User.create({
                        user_email: customerEmail,
                        customer_id: customerId,
                        product_id: productId,
                        price_id: priceId,
                        subscription: 1,
                    })
                    return newUser
                } else {
                    await User.update({ subscription: 1, product_id: `${productId}` }, { where: { user_email: `${customerEmail}` } })
                }

            }


            if (eventType === 'invoice.payment_failed' || eventType === 'customer.subscription.deleted') {
                const user: any = await User.findOne({ where: { customer_id: `${customerId}` } })

                if (user) {
                    user.subscription = 0
                    await user.save()
                }

            }

            return { status: 'ok' }

        }
    } catch (e: any) {
        console.log("🚀 ~ defineEventHandler ~ e:", e)
        return setResponseStatus(event, 500, e.message)
    }
})