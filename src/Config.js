//import baseConfig from './base';

let config = {
    appEnv: 'production', //'dev'
    serverUrl: 'http://localhost:8080/api/',
    testVar: ''
};

// export default Object.freeze(Object.assign({}, baseConfig, config)); // Não pode alterar o atributo depois
//export default Object.assign({}, baseConfig, config) // Or just: export default {...baseConfig, ...config}
module.exports = Object.freeze(config);
