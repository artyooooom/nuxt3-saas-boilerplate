import { lemonsqueezy } from "@/server/utils/lemonsqueezy"

export default defineEventHandler(async (event) => {
    try {
        const productName = getRouterParam(event, 'name')
        if (!productName) throw 'No product provided'

        return await lemonsqueezy.getBuyLink(productName)
    } catch (e: any) {
        return setResponseStatus(event, 500, e)
    }
})