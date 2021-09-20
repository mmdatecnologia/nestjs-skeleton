import * as winston from 'winston';
import * as Transport from 'winston-transport';
import { WinstonModuleOptions, utilities } from 'nest-winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';
import * as apm from 'elastic-apm-node';

apm.start({
  active: process.env.ELASTIC_APM_ACTIVE === 'true',
  captureBody: 'all',
  environment: process.env.ELASTIC_APM_ENVIRONMENT,
  instrument: process.env.ELASTIC_APM_INSTRUMENT === 'true',
  instrumentIncomingHTTPRequests: process.env.ELASTIC_APM_INSTRUMENT_INCOMING_HTTP_REQUESTS === 'true',
  secretToken: process.env.ELASTIC_APM_SECRET_TOKEN,
  serverUrl: process.env.ELASTIC_APM_SERVER_URL,
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME,
  usePathAsTransactionName: process.env.ELASTIC_APM_USE_PATH_AS_TRANSACTION_NAME === 'true',
});

const consoleTransport: Transport = new winston.transports.Console({
  format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike()),
});

const eSTransport: Transport = new ElasticsearchTransport({
  apm,
  clientOpts: {
    node: process.env.ELASTIC_APM_SERVER_URL || 'http://localhost:9200',
  },
  level: process.env.LOGGER_LEVEL || 'info',
});

export const loggerConfig: WinstonModuleOptions = {
  level: process.env.LOGGER_LEVEL || 'info',
  transports: [consoleTransport, eSTransport],
};
