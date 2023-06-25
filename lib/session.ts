import { getServerSession } from 'next-auth/next';
import { NextAuthOptions, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';
import jsonWebToken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { SessionInterface } from '@/commom.types';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => {},
    decode: async ({ secret, token }) => {},
  },
  theme: {
    colorScheme: 'light',
    logo: '/logo.svg',
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        if (user) {
          console.log('User: ', user);
        }
        // get the user if they exist

        //if they don't exist, create them

        return true;
      } catch (error: any) {
        console.log('Callback error: ', error);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as SessionInterface;

  return session;
}
