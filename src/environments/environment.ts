import { defaultEnv } from './default';

export const environment = {
  ...defaultEnv,
  production: false,
  apiUrl: 'http://localhost:8080/api',
  awsAccessKeyId: 'fake',
};
