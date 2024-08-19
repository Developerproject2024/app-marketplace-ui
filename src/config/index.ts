import developmentConfig from './development';
import productionConfig from './production';

let config;

switch (process.env.NODE_ENV) {
  case 'production':
    config = productionConfig;
    break;
  case 'development':
  default:
    config = developmentConfig;
    break;
}

export default config;
