import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_AUTHENTICATE } from '@/fetcher/endpoint';

export interface LoginData {
  userName: string;
  password: string;
  phoneNumber: string;
  fulName: string;
  address: string;
  accountBankingNumber: string;
  bankingName: string;
}
export interface DataLogin {
  accessToken: string;
  refreshToken: string;
}

export const login = (data: LoginData) => {
  return postLogin<LoginData, ResponseWithPayload<DataLogin>>({ data })(
    API_AUTHENTICATE.REGISTER
  );
};
