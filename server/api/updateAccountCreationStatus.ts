// api/updateUser.ts
import User from '../models/users';

export default defineEventHandler(async (event) => {
  try {
    if (event.req.method === 'POST') {
      const { email } = await readBody(event);

      // Find the user by email
      let result = await User.update({
        is_account_created: true
      }, {
        where: {
          user_email: email
        }
      });

      if (result[0] === 0) {
        // If the user does not exist, return a 404 status
        return setResponseStatus(event, 404, 'User not found');
      }

      // Return the updated user
      return true;
    }
  } catch (e: any) {
    // Handle errors
    return setResponseStatus(event, 500, e.message || 'Internal Server Error');
  }
});