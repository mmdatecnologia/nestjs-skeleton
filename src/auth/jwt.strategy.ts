import { JwtPayload } from '@/auth/interfaces/jwt-payload.interface';
import { keycloakConfig } from '@/config/keycloak.config';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      algorithms: ['RS256'],

      issuer: keycloakConfig.clientURL,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${keycloakConfig.clientURL}/protocol/openid-connect/certs`,
        rateLimit: true,
      }),
    });
  }

  validate(payload: JwtPayload): string {
    const { externalId } = payload;
    return externalId;
  }
}
