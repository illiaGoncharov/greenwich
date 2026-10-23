/** На GitHub Pages — /greenwich; в `next dev` — корень, чтобы не ловить 404 на `/` */
export const basePath =
  process.env.NODE_ENV === "production" ? "/greenwich" : "";
