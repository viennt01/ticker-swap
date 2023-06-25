import { get, ResponseWithPayload } from '@/fetcher';
import { API_USER } from '@/fetcher/endpoint';
export interface DataInformation {
  id: number;
  fulName: string;
  phoneNumber: string;
  address: string;
  bankingName: string;
  accountBankingNumber: string;
  money: number;
}
export interface dataInput {
  id: number;
}
export const getDataInformation = (id: string) => {
  return get<dataInput, ResponseWithPayload<DataInformation>>({})(
    `${API_USER.GET_USER_BY_ID}/${id}`
  );
};
