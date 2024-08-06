import { lemonsqueezy } from "@/server/utils/lemonsqueezy"

// here put the logic to check whether the account is created already or not
export default defineEventHandler(async (event) => {
    try {
        if (event.req.method === 'POST') {
            const { customer_id } = await readBody(event)

            let customer = await lemonsqueezy.getCustomer(customer_id)
            
            return customer

        }
    } catch (e: any) {
        return setResponseStatus(event, 500, e.message)
    }
})