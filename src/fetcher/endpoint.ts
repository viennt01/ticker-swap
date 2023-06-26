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
  GET_ALL_TICKETS_SELL: '/Tickets/GetAllSelled',
  GET_TICKET_BY_USER_ID: '/Tickets/GetDetailByUserId',
};

export const API_USER = {
  GET_ALL: '/Users/GetAll',
  GET_USER_BY_ID: '/Users',
  GET_TICKET_BY_BUYER_ID: '/Users/HistoryBuyByUserId',
};
export const API_ORDER = {
  ORDER: '/Carts/AddToCart',
  GET_TICKET_BY_CART: '/Carts/GetCartByIdUser',
  DELETE_TICKET_BY_CART: '/Carts/DeleteToCart',
  BUY_TICKET: '/Carts/PaymentToCart',
};

export const API_PAYMENT = {
  REQUEST_PAYMENT: '/Payments/RequestPayment',
  ALL_PAYMENT: '/Payments/GetAll',
  CONFIRM_PAYMENT: '/Payments/GetAllNeedToConfirm',
  CONFIRM_PAYMENT_HANDLE: '/Payments/ConfirmPayment',
};
