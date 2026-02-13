import { AuthClient } from './authClient';

export function requireAuth(authClient: AuthClient) {
  return async function guard(ctx: any) {
    const token = authClient.getAccessToken();
    if (!token) throw new Error('Not authenticated');
    return true;
  };
}
