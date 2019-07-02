
const mongoose = require('mongoose');
const exec = require('child_process').exec;
// const chatService = require('../services/chat');


function checkingConnectionMongo(){
    let code = mongoose.connection.readyState;
    //global.log.error(code);
    switch (code) {
        case 0:
            global.log.info('[Mongo] Banco de Dados DESCONECTADO!');
            connectMongo();
            break;
        case 1:
            global.log.info('[Mongo] Banco de Dados CONECTADO!');
            break;
        case 2:
            global.log.info('[Mongo] TENTANDO CONECTAR...');
            global.db = mongoose.connect('mongodb://' + global.gConfig.HOST_MONGO + '/'+global.gConfig.HOST_MONGO_DATABASE).catch(function (error) {
                global.log.error('[Mongo] Checando Conexão. Error ' + error);
            });
            break;
        case 3:
            global.log.info('[Mongo] DESCONECTANDO...');
            break;
    }
}

/**
 * Ao Conectar no Banco de Dados 
 */
function connectMongo() {
    db = mongoose.connect('mongodb://' + global.gConfig.HOST_MONGO + '/'+global.gConfig.HOST_MONGO_DATABASE, function (err) {
        if (err) {
            global.log.info('[Mongo] Erro ao Conectar no MongoDB');
            global.log.info(mongoose.connection.readyState);
            global.rotinaVerificandoConexaoMongo = setInterval(checkingConnectionMongo, 15000)
            return;
        }
        global.log.info('[Mongo] Conectado ao MongoDB');
        global.rotinaVerificandoConexaoMongo = setInterval(checkingConnectionMongo, 300000)
        eventService.pegaOsEventosDoMongoEdisparaRotinas();
        checkingConnectionMongo();
        return;
    }).catch(function (error) {
        global.log.error('[Mongo] Error ' + error);
    });
}