import { AxiosRequestConfig, Method } from 'axios';

export interface IServiceAbstractRequest {
  url: string;
  method: Method;
  data?: string | Record<string, unknown>;
  config?: AxiosRequestConfig;
}
