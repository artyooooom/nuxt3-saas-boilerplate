import User from '@/server/models/users'
import { lemonsqueezy } from "@/server/utils/lemonsqueezy"

export default defineEventHandler(async (event) => {
    try {
        if (event.req.method === 'POST') {
            const body = await readBody(event)
            const rawBody = await readRawBody(event)
            const headers = await getRequestHeaders(event)

            const eventName = headers['x-event-name']
            const sign = headers['x-signature']

            // if there's no body of request / no signature / no event name provided - throw an error
            if (!rawBody || !sign || !eventName) throw new Error('One of required parameters is missing')

            // if the signature of request is not validated -  throw an error
            if (!(await lemonsqueezy.signRequest(rawBody, sign))) throw new Error('Request was not validated')

            const customerEmail = body.data.attributes.user_email
            const customerId = body.data.attributes.customer_id
            
            // else everything's validated and we proccess the webhook
            if (eventName === 'order_created') {
                const productId = body.data.attributes.first_order_item.product_id
                const user: any = await User.findOne({ where: { customer_id: `${customerId}` } })
                
                if(!user) {
                    const newUser = await User.create({
                        user_email: customerEmail,
                        customer_id: customerId,
                        product_id: productId,
                        subscription: 1,
                    })
                    return newUser
                } else {
                    await User.update({ subscription: 1, product_id: `${productId}` }, { where: { customer_id: `${customerId}` } })
                }


            }


            if (eventName === 'subscription_cancelled' || eventName === 'subscription_expired') {
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