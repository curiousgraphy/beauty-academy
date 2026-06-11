/**
 * Prefix a public asset path with the deploy base path.
 *
 * Plain <img>/<link> references aren't rewritten by Next's `basePath`, so any
 * absolute path into /public must go through here to work under the GitHub
 * Pages project subpath (/beauty-academy). Locally the base is empty → no-op.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path; // leave absolute URLs alone
  return `${BASE}${path}`;
}
