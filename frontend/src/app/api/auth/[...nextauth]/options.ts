// import type { NextAuthOptions } from "next-auth"
// import type { CustomAuthOptions, CustomSession } from "./CustomAuthOptions";
import Google from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      Google({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
    ],
    // callbacks: {
    //   async session({ session, token }) {
    //     if (session?.user) {
    //       session.user.id = token.uid;
    //     }
    //     return session;
    //   },
    //   async jwt({ token, user }) {
    //     if (user) {
    //       token.uid = user.id;
    //     }
    //     return token;
    //   }
    // }
  }