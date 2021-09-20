import { RedisCacheModule } from '@/cache/cache.module';
import HttpConfigService from '@/commons/HttpConfigService';
import ServiceAbstract from '@/services/ServiceAbstract';
import { ServiceAuthenticated } from '@/services/ServiceAuthenticated/ServiceAuthenticated';
import { HttpModule } from '@nestjs/axios';
import { forwardRef, Module } from '@nestjs/common';

@Module({
  exports: [ServiceAuthenticated],
  imports: [
    forwardRef(() => RedisCacheModule),
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  providers: [ServiceAbstract, ServiceAuthenticated],
})
export class ServiceModule {}
