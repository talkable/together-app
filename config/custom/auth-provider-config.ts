import type { Nullable, AuthProviderConfig } from '../../types';
import GoogleProvider from "next-auth/providers/google";

export const authProviderConfig: Nullable<AuthProviderConfig> = {
  provider: GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  }),
  type: 'google',
};
