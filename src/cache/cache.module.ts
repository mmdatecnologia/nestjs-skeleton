import * as redisStore from 'cache-manager-redis-store';
import { CacheModule, Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { redisConfig } from '../config/redis.config';

const redisModuleConfig = {
  auth_pass: redisConfig.redisPassword,
  host: redisConfig.redisHost,
  port: redisConfig.redisPort,
  store: redisStore,
  tls: true,
};

const cacheModule =
  process.env.CACHE_ENV === 'TEST'
    ? CacheModule.register()
    : CacheModule.register(redisModuleConfig);
@Module({
  exports: [CacheService],
  imports: [cacheModule],
  providers: [CacheService],
})
export class RedisCacheModule {}
