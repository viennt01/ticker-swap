import { get, postLogin, ResponseWithPayload } from '@/fetcher';
import { API_PAYMENT, API_TICKET, API_USER } from '@/fetcher/endpoint';
export interface DataTicket {
  id: number;
  ticketName: string;
  description: string;
  avatar: string;
  price: number;
  created: string;
}
export interface DataUser {
  userId: number;
  userName: string;
  password: string;
  phoneNumber: string;
  fulName: number;
  image: string;
  address: number;
  status: number;
  roleId: string;
}
export interface AllPayment {
  id: number;
  userId: number;
  keyPayment: string;
  price: number;
  status: number;
  created: string;
}

export interface PaymentConfirm {
  userId: number;
  keyConfirm: string;
}

export const getListTicket = () => {
  return get<undefined, ResponseWithPayload<DataTicket[]>>({})(
    API_TICKET.GET_ALL_TICKETS
  );
};

export const getListTicketSell = () => {
  return get<undefined, ResponseWithPayload<DataTicket[]>>({})(
    API_TICKET.GET_ALL_TICKETS_SELL
  );
};

export const getListUser = () => {
  return get<undefined, ResponseWithPayload<DataUser[]>>({})(API_USER.GET_ALL);
};

export const getListPaymentAll = () => {
  return get<undefined, ResponseWithPayload<AllPayment[]>>({})(
    API_PAYMENT.ALL_PAYMENT
  );
};

export const getListPaymentConfirm = () => {
  return get<undefined, ResponseWithPayload<AllPayment[]>>({})(
    API_PAYMENT.ALL_PAYMENT
  );
};

export const postPaymentConfirm = (data: PaymentConfirm) => {
  return postLogin<PaymentConfirm, ResponseWithPayload<PaymentConfirm>>({
    data,
  })(API_PAYMENT.CONFIRM_PAYMENT_HANDLE);
};
