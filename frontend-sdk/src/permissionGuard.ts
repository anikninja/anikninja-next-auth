export function checkPermission(user: any, permission: string) {
  if (!user) return false;
  const perms = user.permissions || [];
  return perms.includes(permission);
}
