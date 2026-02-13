export interface SessionData {
  userId: string;
  device?: string;
  createdAt: number;
}

export interface SessionProvider {
  create(session: SessionData): Promise<string>;
  get(sessionId: string): Promise<SessionData | null>;
  revoke(sessionId: string): Promise<void>;
}
