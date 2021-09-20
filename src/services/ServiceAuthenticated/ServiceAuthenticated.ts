import { KeycloakAuthService } from '@/services/KeycloakServicesAuth/KeycloakAuth.service';
import ServiceAbstract from '@/services/ServiceAbstract';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, Method } from 'axios';

@Injectable()
export class ServiceAuthenticated extends ServiceAbstract {
  private readonly keycloakAuthService: KeycloakAuthService;

  async makeRequestAuthenticated(
    url: string,
    method: Method,
    data: string | Record<string, unknown>,
    config: AxiosRequestConfig,
  ) {
    const token = await this.keycloakAuthService.getKeyCloakToken();

    const authorization = {
      Authorization: `Bearer ${token}`,
    };
    return this.http[method]({
      data,
      url,
      headers: config.headers ? { authorization, ...config.headers } : authorization,
      ...config,
    });
  }
}
