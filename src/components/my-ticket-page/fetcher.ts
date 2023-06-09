import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_TICKET } from '@/fetcher/endpoint';
export interface DataTicket {
  ticketId: number;
  ticketName: string;
  ticketCode: string;
  description: string;
  quantity: number;
  avatar: string;
  price: number;
  userId: number;
  status: number;
  addressBuy: string;
  timeUse: string;
}
export interface dataSend {
  id: number;
}

export const getListMyTicket = (data: dataSend) => {
  return postLogin<dataSend, ResponseWithPayload<DataTicket[]>>({ data })(
    API_TICKET.GET_TICKET_BY_USER_ID
  );
};
