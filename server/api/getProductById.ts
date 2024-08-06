import { lemonsqueezy } from "@/server/utils/lemonsqueezy"

// here put the logic to check whether the account is created already or not
export default defineEventHandler(async (event) => {
    try {
        if (event.req.method === 'POST') {
            const { productId } = await readBody(event)

            let product = await lemonsqueezy.getProduct(productId)
            
            return product

        }
    } catch (e: any) {
        return setResponseStatus(event, 500, e.message)
    }
})