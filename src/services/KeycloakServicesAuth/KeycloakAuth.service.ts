import * as qs from 'qs';
import { keycloakConfig } from '@/config/keycloak.config';
import ServiceAbstract from '@/services/ServiceAbstract';
import {
  KEYCLOAK_SERVICES_ACCESS_TOKEN,
  KEYCLOAK_SERVICES_ACCESS_TOKEN_TTL,
  KEYCLOAK_SERVICES_REFRESH_TOKEN,
  KEYCLOAK_SERVICES_REFRESH_TOKEN_TTL,
} from './types/keycloak-services.constants';
import { KeycloakServicesAuthRequestBody } from './types/keycloak-services.interface';

export class KeycloakAuthService extends ServiceAbstract {
  private async getKeycloakServicesArgs() {
    const cachedRefreshToken = await this.cacheService.get<string>(KEYCLOAK_SERVICES_REFRESH_TOKEN);

    if (!cachedRefreshToken) {
      return [keycloakConfig.servicesAuthClientCredentials, null];
    }

    return [keycloakConfig.servicesAuthRefreshToken, cachedRefreshToken];
  }

  private async updateKeycloakServicesCache() {
    const [grantType, cachedRefreshToken] = await this.getKeycloakServicesArgs();
    const [accessToken, refreshToken] = await this.getKeycloakServicesToken(grantType, cachedRefreshToken);
    await this.cacheService.set<string>(KEYCLOAK_SERVICES_ACCESS_TOKEN, accessToken, {
      ttl: KEYCLOAK_SERVICES_ACCESS_TOKEN_TTL,
    });
    await this.cacheService.set<string>(KEYCLOAK_SERVICES_REFRESH_TOKEN, refreshToken, {
      ttl: KEYCLOAK_SERVICES_REFRESH_TOKEN_TTL,
    });
    return accessToken;
  }

  async getKeyCloakToken() {
    let token = await this.cacheService.get<string>(KEYCLOAK_SERVICES_ACCESS_TOKEN);
    if (!token) {
      token = await this.updateKeycloakServicesCache();
    }
    return token;
  }

  private async getKeycloakServicesToken(grantType: string, cachedRefreshToken = ''): Promise<string[]> {
    const payload: KeycloakServicesAuthRequestBody = {
      client_id: keycloakConfig.servicesAuthClientId,
      client_secret: keycloakConfig.servicesAuthClientSecret,
      grant_type: grantType,
      refresh_token: undefined,
    };

    if (grantType === keycloakConfig.servicesAuthRefreshToken) {
      payload.refresh_token = cachedRefreshToken;
    }

    const {
      data: { access_token: accessToken, refresh_token: refreshToken },
    } = await this.makeRequest({
      config: {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      },
      data: qs.stringify(payload),
      method: 'POST',
      url: `${keycloakConfig.servicesAuthURL}/protocol/openid-connect/token`,
    });

    return [accessToken, refreshToken] as string[];
  }
}
