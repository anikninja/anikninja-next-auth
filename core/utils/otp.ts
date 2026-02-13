import { createHmac } from 'crypto';

export function generateTotp(secret: string, step = 30) {
  const counter = Math.floor(Date.now() / 1000 / step);
  const hmac = createHmac('sha1', secret).update(String(counter)).digest('hex');
  return hmac.slice(0, 6);
}

export function verifyTotp(secret: string, token: string, window = 1, step = 30) {
  const now = Math.floor(Date.now() / 1000 / step);
  for (let i = -window; i <= window; i++) {
    const hmac = createHmac('sha1', secret).update(String(now + i)).digest('hex');
    if (hmac.slice(0, 6) === token) return true;
  }
  return false;
}
