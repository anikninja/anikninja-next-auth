import { promises as fs } from 'fs';

export async function loadRules(path: string) {
  const raw = await fs.readFile(path, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}
