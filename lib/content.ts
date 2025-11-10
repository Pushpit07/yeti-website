import { readFile } from 'node:fs/promises'
import path from 'node:path'

export async function readJson<T>(relativePath: string): Promise<T> {
  const abs = path.join(process.cwd(), 'content', relativePath)
  const raw = await readFile(abs, 'utf-8')
  return JSON.parse(raw) as T
}

export function contentPath(...segments: string[]) {
  return path.join(process.cwd(), 'content', ...segments)
}

