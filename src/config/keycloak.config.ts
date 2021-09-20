require('dotenv-flow').config();

export const keycloakConfig = {
  clientURL: process.env.KEYCLOAK_CLIENT_URL,
  servicesAuthClientCredentials: process.env.KEYCLOAK_CLIENT_CREDENTIALS,
  servicesAuthClientId: process.env.KEYCLOAK_CLIENT_ID,
  servicesAuthClientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
  servicesAuthRefreshToken: process.env.KEYCLOAK_REFRESH_TOKEN,
  servicesAuthURL: process.env.KEYCLOAK_URL,
};
