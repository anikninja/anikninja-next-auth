export class PolicyEngine {
  constructor(private policies: Record<string, any> = {}) {}

  async evaluate(subject: any, action: string, resource?: any) {
    // very small evaluator: checks role-based allow rules
    const role = (subject && subject.role) || null;
    const rule = this.policies[action];
    if (!rule) return false;
    if (rule.roles && role && rule.roles.includes(role)) return true;
    return false;
  }
}
