export interface UserProvider {
  getUserById(id: string): Promise<any | null>;
  findByEmail(email: string): Promise<any | null>;
}
