import type { CustomAuthOptions, CustomSession } from "./CustomAuthOptions";
import Google from "next-auth/providers/google"

export const authOptions:CustomAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      Google({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
    ],
    callbacks: {
      async session({ session, token}) {
        let newSession:CustomSession = session
        newSession.user!.id = token.sub;
        return newSession
      },
      async jwt({ token, user }) {
        if (user) {
          const checkIdResponse = await fetch(`http://${process.env.API_HOST}:5000/api/users/${user.id}`);
          if(checkIdResponse.status===404) {
            console.log("Creating user", user.id);
            let userBody = {
              id: user.id,
              name: user.name
            }
            const createUserResponse = await fetch(`http://${process.env.API_HOST}:5000/api/users`,{
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(userBody)
            });
          }
        }
        return token;
      }
    },
    secret: process.env.NEXTAUTH_SECRET
  }