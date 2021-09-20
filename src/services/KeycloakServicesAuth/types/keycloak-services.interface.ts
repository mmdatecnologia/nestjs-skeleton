export interface KeycloakServicesAuthToken {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  'not-before-policy': number;
  session_state: string;
  scope: string;
}

export interface KeycloakServicesAuthRequestBody {
  client_id: string;
  client_secret: string;
  grant_type: string;
  refresh_token: string;
}
