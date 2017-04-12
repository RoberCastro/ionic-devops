import { IEnvironment } from "./env-model";

export const prodVariables:IEnvironment = {
  environmentName: 'Production Environment',
  ionicEnvName: 'prod',

  // Front-end
  apiEndpoint: 'http://localhost:8080',

  // Back-end
  dbHost: 'mongodb://robercastro:robercastro@ds135820.mlab.com:35820',
  dbName: 'rob_ionic_devops'
};
