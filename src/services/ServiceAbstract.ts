import { CacheService } from '@/cache/cache.service';
import { IServiceAbstractRequest } from '@/services/interfaces/service-abstract-response.interface';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class ServiceAbstract {
  constructor(public cacheService: CacheService, public http: HttpService) {}

  async makeRequest({ url, method, data, config }: IServiceAbstractRequest) {
    return this.http[method]({
      data,
      url,
      ...config,
    });
  }
}
