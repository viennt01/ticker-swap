import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_PAYMENT } from '@/fetcher/endpoint';
export interface RequestPayment {
  userId: number;
  price: number;
}
export const RequestDrawMoneyPayment = (data: RequestPayment) => {
  return postLogin<RequestPayment, ResponseWithPayload<string>>({
    data,
  })(API_PAYMENT.REQUEST_DRAW_MONEY_PAYMENT);
};
