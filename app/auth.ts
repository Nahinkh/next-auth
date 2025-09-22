import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google,

    Credentials({
      name: "Credentials",
      credentials:{
        email: {label: "Email", type: "email", placeholder: "john@example.com"},
        password: {label: "Password", type: "password", placeholder: "••••••••"},
      },
      async authorize(credentials) {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials?.email });
        if (user && user.password === credentials?.password) {
          return { id: user._id, name: user.name, email: user.email };
        }
        return null;
      }
    })
  ],
  session: {strategy: "jwt"},
  secret: process.env.NEXTAUTH_SECRET,
})