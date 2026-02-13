import { TokenManager } from './token_manager';

export class AuthFlowManager {
  constructor(private tokenManager: TokenManager) {}

  async login(user: any) {
    const payload = { sub: String(user.id), roles: user.roles || [] };
    const access = await this.tokenManager.generateAccessToken(payload);
    return { access };
  }

  async logout(sessionId?: string) {
    // placeholder: revoke session if session store exists
    return true;
  }
}
