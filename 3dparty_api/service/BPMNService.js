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
    let addr = `http://${camundaHost}:${camundaPort}/engine-rest/process-definition/${id}/xml`;
    request.get(addr, function(err, res, body) {
      if(err) reject(err);
      try {
        resolve(res);
      } catch(e) {
        reject(e);
      }
    });
//     var examples = {};
//     examples['application/json'] = {
//   "serviceIdRequested" : "serviceIdRequested",
//   "formData" : { },
//   "id" : "id",
//   "xmlState" : "xmlState",
//   "dateSubmitted" : "dateSubmitted",
//   "status" : "status"
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
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

