import { generateTotp, verifyTotp } from '../utils/otp';

export class TwoFactorManager {
  generate(secret: string) {
    return generateTotp(secret);
  }

  verify(secret: string, token: string) {
    return verifyTotp(secret, token);
  }
}
