import { randomBytes, pbkdf2Sync } from 'crypto';

export function randomSecret(bytes = 32) {
  return randomBytes(bytes).toString('hex');
}

export function hashPassword(password: string, salt?: string) {
  const _salt = salt || randomSecret(16);
  const hash = pbkdf2Sync(password, _salt, 100000, 64, 'sha512').toString('hex');
  return { salt: _salt, hash };
}

export function verifyPassword(password: string, salt: string, expectedHash: string) {
  const { hash } = hashPassword(password, salt);
  return hash === expectedHash;
}
