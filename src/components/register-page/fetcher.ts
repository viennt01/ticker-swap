import { postNoHeader, ResponseWithPayload } from '@/fetcher';
import { API_AUTHENTICATE } from '@/fetcher/endpoint';

export interface LoginData {
  UserName: string;
  Password: string;
  PhoneNumber: string;
  FulName: string;
  File: any;
  Address: string;
}
export interface DataLogin {
  accessToken: string;
  refreshToken: string;
}

export const login = (data: LoginData) => {
  const formdata = new FormData();
  formdata.append('UserName', data.UserName);
  formdata.append('Password', data.Password);
  formdata.append('PhoneNumber', data.PhoneNumber);
  formdata.append('FulName', data.FulName);
  formdata.append('File', data.File);
  formdata.append('Address', data.Address);

  return postNoHeader<LoginData, ResponseWithPayload<DataLogin>>({ data })(
    API_AUTHENTICATE.REGISTER
  );
};
