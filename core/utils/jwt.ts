import { createHmac } from 'crypto';

function base64UrlEncode(input: string) {
  return Buffer.from(input).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64UrlDecode(input: string) {
  const pad = 4 - (input.length % 4);
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/') + (pad === 4 ? '' : '='.repeat(pad));
  return Buffer.from(normalized, 'base64').toString('utf8');
}

export async function sign(payload: Record<string, any>, secret: string, expiresInSec = 900) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const body = Object.assign({}, payload, { iat: now, exp: now + expiresInSec });
  const headerB = base64UrlEncode(JSON.stringify(header));
  const bodyB = base64UrlEncode(JSON.stringify(body));
  const toSign = `${headerB}.${bodyB}`;
  const signature = createHmac('sha256', secret).update(toSign).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  return `${toSign}.${signature}`;
}

export async function verify(token: string, secret: string) {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('Invalid token');
  const [h, b, sig] = parts;
  const toSign = `${h}.${b}`;
  const expected = createHmac('sha256', secret).update(toSign).digest('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  if (sig !== expected) throw new Error('Invalid signature');
  const payload = JSON.parse(base64UrlDecode(b));
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp < now) throw new Error('Token expired');
  return payload as Record<string, any>;
}
