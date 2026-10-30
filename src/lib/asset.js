// Resolve a file in public/ against the deploy base (e.g. /joa-website-prototype/ on GitHub Pages)
export function asset(path) {
  if (!path || /^([a-z]+:|\/|#)/i.test(path)) return path;
  return import.meta.env.BASE_URL + path;
}
