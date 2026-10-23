/** Префикс для файлов из public/ при basePath=/greenwich */
const basePath = "/greenwich";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
