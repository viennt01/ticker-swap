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
}

export const getListMyTicketBuyer = (data: number) => {
  return postLogin<number, ResponseWithPayload<DataTicket[]>>({ data })(
    API_TICKET.GET_TICKET_BY_BUYER_ID
  );
};
