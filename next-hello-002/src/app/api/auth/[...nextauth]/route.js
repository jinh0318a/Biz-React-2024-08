import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  pages: {
    signIn: "/users/login",
    signOut: "/users/logout",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GG_CLIENT_ID,
      clientSecret: process.env.GG_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: "Credentials",
      name: "Credentials",
      credentials: {
        username: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" },
      },

      async authorize(loginUser) {
        const { username, password } = loginUser;
        const user = {
          id: 1,
          email: "jinh0318@naver.com",
          name: "홍길동",
          password: "1234",
        };
        if (username === user.email && password === user.password) {
          return { ...user, password: undefined };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  session: {
    maxAge: 60 * 60,
  },
});

export { handler as GET, handler as POST };
