import type { Awaitable, CallbacksOptions, DefaultSession, NextAuthOptions, Session } from "next-auth"
import { AdapterUser } from "next-auth/adapters"
import { JWT } from "next-auth/jwt"

export interface CustomAuthOptions extends NextAuthOptions {
    callbacks?: Partial<CustomCallbacksOptions>
}

export interface CustomCallbacksOptions extends CallbacksOptions {
    session: (
        params:
          | {
              session: Session|CustomSession
              /** Available when {@link SessionOptions.strategy} is set to `"jwt"` */
              token: JWT
              /** Available when {@link SessionOptions.strategy} is set to `"database"`. */
              user: AdapterUser
            } & {
              /**
               * Available when using {@link SessionOptions.strategy} `"database"`, this is the data
               * sent from the client via the [`useSession().update`](https://next-auth.js.org/getting-started/client#update-session) method.
               *
               * ⚠ Note, you should validate this data before using it.
               */
              newSession: any
              trigger: "update"
            }
      ) => Awaitable<Session | DefaultSession | CustomSession>
}

export interface CustomSession extends Session {
    user?: {
        name?: string | null
        email?: string | null
        image?: string | null
        id?: string | null | any
      }
}