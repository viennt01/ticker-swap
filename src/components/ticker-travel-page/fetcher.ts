import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_TICKET } from '@/fetcher/endpoint';
export interface DataTicket {
  id: number;
  ticketName: string;
  ticketCode: string;
  description: string;
  quantity: number;
  avatar: string;
  price: number;
  userId: number;
  status: string;
}
export interface dataByTicket {
  id: number;
}
export const login = (data: dataByTicket) => {
  return postLogin<dataByTicket, ResponseWithPayload<DataTicket[]>>({ data })(
    API_TICKET.GET_TICKET_BY_TYPE
  );
};
