export const ROUTERS = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  HOME: '/',
  DETAIL_TICKET_FILM: (id: string) => `/ticker-film/${[id]}`,
  LIST_TICKET_FILM: '/ticker-film',
  TRANSACTION: (id: string) => `/transaction/${[id]}`,
};
