import { AxiosRequestConfig } from 'axios';
import { proxyConfig } from '@/config/proxy.config';

const config: AxiosRequestConfig = {};

if (proxyConfig.user && proxyConfig.pass) {
  config.proxy = {
    auth: {
      password: proxyConfig.pass,
      username: proxyConfig.user,
    },
    host: proxyConfig.server,
    port: parseInt(proxyConfig.port, 10),
  };
}

export default config;
