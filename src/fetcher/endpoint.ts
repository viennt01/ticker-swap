export const UPLOAD = {
  IMAGE: '/upload',
};

export const API_AUTHENTICATE = {
  LOGIN: '/Users/Login',
  REGISTER: '/Users/Register',
};

export const API_TICKET = {
  GET_TICKET_BY_TYPE: '/Tickets/GetTicketByType',
  GET_TICKET_BY_ID: '/Tickets/GetDetailById',
  GET_ALL_TICKETS: '/Tickets/GetAll',
  GET_TICKET_BY_USER_ID: '/Ticket/GetTicketByUserId',
  GET_TICKET_BY_BUYER_ID: '/Ticket/GetTicketByBuyerId',
};

export const API_USER = {
  GET_ALL: '/Users/GetAllUser',
  GET_USER_BY_ID: '/Users',
};
export const API_ORDER = {
  ORDER: '/Carts/AddToCart',
  GET_TICKET_BY_CART: '/Carts/GetCartByIdUser',
  DELETE_TICKET_BY_CART: '/Carts/DeleteToCart',
  BUY_TICKET: '/Carts/PaymentToCart',
};
