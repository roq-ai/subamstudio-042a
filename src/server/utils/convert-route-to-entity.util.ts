const mapping: Record<string, string> = {
  assignments: 'assignment',
  media: 'media',
  projects: 'project',
  studios: 'studio',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
