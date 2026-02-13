import { useState, useEffect } from 'react';
import { FrontendSessionManager } from '../src/sessionManager';

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const s = new FrontendSessionManager();
    setUser(s.getUser());
  }, []);
  return { user };
}
