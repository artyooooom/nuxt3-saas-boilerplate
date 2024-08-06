import User from '@/server/models/users'


// here put the logic to check whether the account is created already or not
export default defineEventHandler(async (event) => {
    try {
        if (event.req.method === 'POST') {
            const { email } = await readBody(event)

            let user = await User.findOne({
                where: {
                    user_email: email
                }
            })

            if (!user) return null

            return user.dataValues

        }
    } catch (e: any) {
        return setResponseStatus(event, 500, e)
    }
})