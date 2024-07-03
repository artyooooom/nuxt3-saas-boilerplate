import { LemonSqueezy } from "@/server/utils/lemonsqueezy"

const lemonsqueezy = new LemonSqueezy()

export default defineEventHandler(async (event) => {
    try {
        const productName = getRouterParam(event, 'name')
        if(!productName) throw 'No product provided'

        return await lemonsqueezy.getBuyLink(productName)
    } catch(e: any) {
        return setResponseStatus(event, 500, e)
    }
  })