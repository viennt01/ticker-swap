import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_ORDER, API_TICKET, API_USER } from '@/fetcher/endpoint';
export interface DataTicket {
  ticketId: number;
  ticketName: string;
  ticketCode: string;
  description: string;
  quantity: number;
  avatar: string;
  price: number;
  userId: number;
  addressBuy: string;
  timeUse: string;
  images: {
    imageId: string;
    imageData: string;
  }[];
}

export const login = (data: number) => {
  return postLogin<number, ResponseWithPayload<DataTicket>>({ data })(
    API_TICKET.GET_TICKET_BY_ID
  );
};

export interface DataUser {
  userId: number;
  userName: string;
  password: string;
  phoneNumber: string;
  fulName: number;
  image: string;
  address: number;
  status: string;
}

export const getTicket = (data: number) => {
  return postLogin<number, ResponseWithPayload<DataUser>>({ data })(
    API_USER.GET_USER_BY_ID
  );
};

export interface LoginData {
  ticketId: number;
  userId: number;
}
export interface DataLogin {
  roleId: string;
  userId: string;
  status: boolean;
  message: string;
}

export const buyTicket = (data: LoginData) => {
  return postLogin<LoginData, ResponseWithPayload<DataLogin>>({ data })(
    API_ORDER.ORDER
  );
};
