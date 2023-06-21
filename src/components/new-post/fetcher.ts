import { get, ResponseWithPayload } from '@/fetcher';
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
  addressBuy: string;
  timeUse: string;
  status: number;
  images: {
    imageId: string;
    imageData: string;
  }[];
}

export const getListTicket = () => {
  return get<number, ResponseWithPayload<DataTicket[]>>({})(
    API_TICKET.GET_ALL_TICKETS
  );
};
