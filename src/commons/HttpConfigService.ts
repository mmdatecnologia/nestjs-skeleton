import { HttpModuleOptions, HttpModuleOptionsFactory, Injectable } from '@nestjs/common';
import config from '@/config/http.config';

@Injectable()
export default class HttpConfigService implements HttpModuleOptionsFactory {
  createHttpOptions(): HttpModuleOptions {
    return {
      ...config,
    };
  }
}
