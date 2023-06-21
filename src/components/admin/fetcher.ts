import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_TICKET, API_USER } from '@/fetcher/endpoint';
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
  status: number;
  images: {
    imageId: string;
    imageData: string;
  }[];
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

export const getListTicket = () => {
  return postLogin<undefined, ResponseWithPayload<DataTicket[]>>({})(
    API_TICKET.GET_ALL_TICKETS
  );
};

export const getListUser = () => {
  return postLogin<undefined, ResponseWithPayload<DataUser[]>>({})(
    API_USER.GET_ALL
  );
};
