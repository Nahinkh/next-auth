import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@example.com" },
        password: { label: "Password", type: "password", placeholder: "••••••••" },
      },
      async authorize(credentials) {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials?.email });
        if (user && user.password === credentials?.password) {
          return { id: user._id, name: user.name, email: user.email };
        }
        return null;
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await connectToDatabase();
      if (account?.provider === 'google') {
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              name: user.name,
              email: user.email,
              provider: 'google',
              password: null
            });
            await newUser.save();
          }
        } catch (error) {
          return false;
        }
      }
      if (account?.provider === 'github') {
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              name: user.name,
              email: user.email,
              provider: 'github',
              password: null
            });
            await newUser.save();
          }
        } catch (error) {
          return false;
        }
      }
      return true;
    }
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
})