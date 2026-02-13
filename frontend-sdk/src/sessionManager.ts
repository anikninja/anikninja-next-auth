export class FrontendSessionManager {
  saveUser(user: any) {
    if (typeof window !== 'undefined') localStorage.setItem('anikninja:user', JSON.stringify(user));
  }

  getUser() {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem('anikninja:user');
    return raw ? JSON.parse(raw) : null;
  }
}
