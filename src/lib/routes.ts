// central location for application routes

export const routes = {
  home: '/',
  about: '/about',
  projects: '/projects',
  project: (slug: string) => `/projects/${slug}`,
  blog: '/blog',
  post: (slug: string) => `/blog/${slug}`,
  portfolio: '/portfolio',
  experience: '/experience',
  contact: '/contact',
};

type RoutesObj = typeof routes;
export type RouteKey = keyof RoutesObj;
