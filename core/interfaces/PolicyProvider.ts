export interface PolicyProvider {
  evaluate(subject: any, action: string, resource?: any): Promise<boolean>;
}
