import { connectToDB } from "@/lib/db";
import User from "@/models/user.model";
import NextAuth, { AuthOptions } from "next-auth";
import { CredentialsProps } from "@/types";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials are required");
        }
        const { email, password } = credentials as CredentialsProps;
        if (!email || !password) {
          throw new Error("All Fields Required");
        }
        try {
          await connectToDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const validPassword = await bcrypt.compare(password, user.password);
          if (!validPassword) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
