import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export function loadContent(filename: string) {
  const filePath = path.join(process.cwd(), 'content', filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const html = marked.parse(content) as string;
  return { frontmatter: data, html };
}
