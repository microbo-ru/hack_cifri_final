'use strict';


var request = require('request');
var camundaPort = 8080;
var camundaHost = '84.201.143.226';

/**
 * Получить BPMN описание конкретной услуги
 *
 * id String Definition ID процесса
 * returns Request
 **/
exports.getProcessById = function(id) {
  return new Promise(function(resolve, reject) {
    console.log("FFF");
    let addr = `http://${camundaHost}:${camundaPort}/engine-rest/process-definition/${id}/xml`;
    request.get(addr, function(err, res, body) {
      if(err) reject(err);
      try {
        resolve(res);
      } catch(e) {
        reject(e);
      }
    });
  });
}


/**
 * Инициировать исполнение услуги (Работает только с постмана)
 *
 * body Request Initiates new request
 * no response value expected for this operation
 **/
exports.newProcess = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

