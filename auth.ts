import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    // })
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/sign-in"
  },
  secret: process.env.AUTH_SECRET
};
