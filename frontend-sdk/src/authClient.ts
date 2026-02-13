export class AuthClient {
  constructor(private baseUrl: string) {}

  async login(email: string, password: string) {
    const res = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return res.json();
  }

  setTokens(access: string, refresh?: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('anikninja:access', access);
      if (refresh) localStorage.setItem('anikninja:refresh', refresh);
    }
  }

  getAccessToken() {
    return typeof window !== 'undefined' ? localStorage.getItem('anikninja:access') : null;
  }
}
