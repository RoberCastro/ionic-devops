import { IEnvironment } from "./env-model";

export const prodVariables:IEnvironment = {
  environmentName: 'Production Environment',
  ionicEnvName: 'prod',
//essai git dev
  // Front-end
  apiEndpoint: 'https://lit-inlet-24331.herokuapp.com',

  // Back-end
  dbHost: 'mongodb://robercastro:robercastro@ds135820.mlab.com:35820',
  dbName: 'rob_ionic_devops'
};
