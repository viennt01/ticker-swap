import { postLogin, ResponseWithPayload } from '@/fetcher';
import { API_AUTHENTICATE } from '@/fetcher/endpoint';

export interface LoginData {
  userName: string;
  password: string;
}
export interface DataLogin {
  roleId: string;
  userId: string;
  status: boolean;
  message: string;
}

export const login = (data: LoginData) => {
  return postLogin<LoginData, ResponseWithPayload<DataLogin>>({ data })(
    API_AUTHENTICATE.LOGIN
  );
};
