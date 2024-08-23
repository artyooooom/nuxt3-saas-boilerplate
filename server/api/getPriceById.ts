import { stripe } from "@/server/utils/stripe"

// here put the logic to check whether the account is created already or not
export default defineEventHandler(async (event) => {
    try {
        if (event.req.method === 'POST') {
            const { priceId } = await readBody(event)

            let price = await stripe.getPrice(priceId)
            return price

        }
    } catch (e: any) {
        return setResponseStatus(event, 500, e.message)
    }
})