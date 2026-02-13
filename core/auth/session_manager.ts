import { SessionProvider, SessionData } from '../interfaces/SessionProvider';

export class InMemorySessionStore implements SessionProvider {
  private store = new Map<string, SessionData>();

  async create(session: SessionData) {
    const id = Math.random().toString(36).slice(2, 12);
    this.store.set(id, session);
    return id;
  }

  async get(sessionId: string) {
    return this.store.get(sessionId) || null;
  }

  async revoke(sessionId: string) {
    this.store.delete(sessionId);
  }
}
