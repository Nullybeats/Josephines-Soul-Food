import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import * as bcrypt from 'bcrypt';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          console.log('[AUTH] Authorize called');
          console.log('[AUTH] DATABASE_URL exists:', !!process.env.DATABASE_URL);

          const { email, password } = loginSchema.parse(credentials);
          console.log('[AUTH] Parsed credentials for email:', email);

          // Find user by email
          const user = await prisma.user.findUnique({
            where: { email },
          });
          console.log('[AUTH] User found:', !!user);

          if (!user) {
            console.log('[AUTH] ERROR: No user found with email:', email);
            return null;
          }

          console.log('[AUTH] User role:', user.role);
          console.log('[AUTH] Password hash exists:', !!user.password);

          // Verify password
          const isValidPassword = await bcrypt.compare(password, user.password);
          console.log('[AUTH] Password valid:', isValidPassword);

          if (!isValidPassword) {
            console.log('[AUTH] ERROR: Invalid password for user:', email);
            return null;
          }

          console.log('[AUTH] Login successful for:', email);
          // Return user object (password excluded)
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error('[AUTH] ERROR:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user info to token on sign in
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user info to session
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});
