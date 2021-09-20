import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache, CachingConfig } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async set(
    key: string,
    value: unknown,
    options: CachingConfig,
  ): Promise<unknown> {
    return this.cacheManager.set(key, value, options);
  }

  async get(key: string): Promise<unknown> {
    return this.cacheManager.get(key);
  }
}
