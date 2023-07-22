const mapping: Record<string, string> = {
  publishers: 'publisher',
  'research-papers': 'research_paper',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
