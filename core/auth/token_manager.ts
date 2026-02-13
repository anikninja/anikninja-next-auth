import { sign, verify } from '../utils/jwt';

export class TokenManager {
  constructor(private secret: string) {}

  async generateAccessToken(payload: Record<string, any>, expiresInSec = 900) {
    return sign(payload, this.secret, expiresInSec);
  }

  async verifyAccessToken(token: string) {
    return verify(token, this.secret);
  }
}
