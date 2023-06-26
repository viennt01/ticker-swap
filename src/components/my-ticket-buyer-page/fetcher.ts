import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_USER } from '@/fetcher/endpoint';
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
}

export interface dataSend {
  id: number;
}

export const getListMyTicketBuyer = (data: dataSend) => {
  return postLogin<dataSend, ResponseWithPayload<DataTicket[]>>({ data })(
    API_USER.GET_TICKET_BY_BUYER_ID
  );
};
