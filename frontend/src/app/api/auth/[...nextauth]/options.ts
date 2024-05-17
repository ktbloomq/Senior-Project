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
        }
        return token;
      }
    },
    secret: process.env.NEXTAUTH_SECRET
  }