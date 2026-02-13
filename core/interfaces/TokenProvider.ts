export interface TokenPayload {
  sub: string;
  exp?: number;
  [key: string]: any;
}

export interface TokenProvider {
  sign(payload: TokenPayload, expiresInSec?: number): Promise<string>;
  verify(token: string): Promise<TokenPayload>;
}
