export const apiConfig = {
  dataProvider: {
    apiKey: process.env.DATA_PROVIDER_API_KEY,
    idClient: process.env.DATA_PROVIDER_ID_CLIENT,
    url: process.env.DATA_PROVIDER_URL,
  },
  serverUrl: process.env.SERVER_URL || 'http://localhost',
  serverPort: process.env.SERVER_PORT || 3000,
};
