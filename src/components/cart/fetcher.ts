import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_ORDER } from '@/fetcher/endpoint';
export interface DataTicket {
  id: number;
  ticketId: number;
  ticketName: string;
  images: string;
  price: number;
  userId: number;
}
export interface dataByCart {
  id: number;
}
export interface dataDeleteByItemCart {
  userId: number;
  ticketId: number;
}
export interface DataDeleteTicket {
  userId: number;
  ticketId: number;
}
export interface dataByBuyTicket {
  id: number;
}
export const getListTicketByCart = (data: dataByCart) => {
  return postLogin<dataByCart, ResponseWithPayload<DataTicket[]>>({ data })(
    API_ORDER.GET_TICKET_BY_CART
  );
};
export const deleteItemCart = (data: dataDeleteByItemCart) => {
  return postLogin<dataDeleteByItemCart, ResponseWithPayload<DataDeleteTicket>>(
    {
      data,
    }
  )(API_ORDER.DELETE_TICKET_BY_CART);
};
export const buyTicket = (data: dataByBuyTicket) => {
  return postLogin<dataByBuyTicket, ResponseWithPayload<string>>({
    data,
  })(API_ORDER.BUY_TICKET);
};
