// om namah shivay

// requires
const _ = require('lodash');
const path = require('path');

// module variables
const config = require('./config.json');
const defaultConfig = config.development;

// Default Variaveis
defaultConfig['PORT'] = process.env.PORT || 8080;
defaultConfig['HOST'] = '0.0.0.0';
defaultConfig['HOST_API'] = process.env.HOST_API || 'http://node/';
defaultConfig['HOST_MONGO'] = process.env.HOST_MONGO || 'localhost';
defaultConfig['HOST_MONGO_USER'] = process.env.HOST_MONGO_USER || 'root';
defaultConfig['HOST_MONGO_PASSWORD'] = process.env.HOST_MONGO_PASSWORD || 'A123456';
defaultConfig['HOST_MONGO_DATABASE'] = process.env.HOST_MONGO_DATABASE || 'db_chat';
defaultConfig['CLIENT_BUILD_PATH'] = path.join(__dirname, '../public');
defaultConfig['LOG_PATH'] = ''; //'logs/';

const environment = process.env.NODE_ENV || 'docker';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
global.gConfig = finalConfig;

global.PORT = global.gConfig.PORT;

// log global.gConfig
console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);