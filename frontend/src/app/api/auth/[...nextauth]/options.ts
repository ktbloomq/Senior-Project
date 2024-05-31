import type User from "@/types/user.model";
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
    theme: {
      colorScheme: "dark"
    },
    callbacks: {
      async session({ session, token}) {
        let newSession:CustomSession = session;
        newSession.user!.id = token.id;
        return newSession
      },
      async jwt({ token, user }) {
        if (user) {
          const checkIdResponse = await fetch(`http://${process.env.API_HOST}:5000/api/users/lookup/?googleid=${user.id}`);
          if(checkIdResponse.status===404) {
            console.log("Creating user", user.id);
            let userBody: Partial<User> = {
              googleid: user.id,
              name: user.name!
            }
            const createUserResponse = await fetch(`http://${process.env.API_HOST}:5000/api/users`,{
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(userBody)
            });
            let userOKPacket = await createUserResponse.json();
            token.id = userOKPacket.insertId;
          } else {
            token.id = (await checkIdResponse.json()).userid;
          }
        }
        return token;
      }
    },
    secret: process.env.NEXTAUTH_SECRET
  }