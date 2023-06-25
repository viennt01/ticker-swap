import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_PAYMENT } from '@/fetcher/endpoint';
export interface RequestPayment {
  userId: number;
  price: number;
}
export const RequestPayment = (data: RequestPayment) => {
  return postLogin<RequestPayment, ResponseWithPayload<string>>({
    data,
  })(API_PAYMENT.REQUEST_PAYMENT);
};
