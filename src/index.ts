import * as functions from "firebase-functions";
import clerk from '@clerk/clerk-sdk-node'

export const helloWorld = functions.https.onRequest(async (request, response) => {
    const users = await clerk.users.getUserList()
  response.send("Found" + users.length + "users");
});
