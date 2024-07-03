import { LemonSqueezy } from "../utils/lemonsqueezy"

const lemonsqueezy = new LemonSqueezy()

export default defineEventHandler(async (event) => {
    try {
        return await lemonsqueezy.createCheckout()
    } catch(e: any) {
        return setResponseStatus(event, 500, e)
    }
  })