export function hasPermission(user: any, permission: string): boolean {
  if (!user) return false;
  const perms = user.permissions || [];
  return perms.indexOf(permission) !== -1;
}
