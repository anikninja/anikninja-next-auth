export function resolveRoles(user: any): string[] {
  if (!user) return [];
  return Array.isArray(user.roles) ? user.roles : [];
}
