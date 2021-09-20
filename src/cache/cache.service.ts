import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache, CachingConfig } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async set<T>(key: string, value: unknown, options: CachingConfig): Promise<T> {
    return this.cacheManager.set(key, value, options);
  }

  async get<T>(key: string): Promise<T> {
    return this.cacheManager.get(key);
  }
}
