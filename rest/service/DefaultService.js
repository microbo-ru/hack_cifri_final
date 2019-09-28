'use strict';

var request = require('request');
var camundaPort = 8080;
var camundaHost = '0.0.0.0';

/**
 *
 * id String ID of the request to get the sattus
 * returns Request
 **/
exports.getRequestById = function(id) {
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
  });
}


/**
 * Возвращает список всех поддерживаемых сервисов
 *
 * returns List
 **/
exports.getServices = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : "id",
  "expectedDuration" : 0
}, {
  "name" : "name",
  "id" : "id",
  "expectedDuration" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Запустить новую услугу на выполнение
 *
 * body Request Initiates new request
 * no response value expected for this operation
 **/
exports.newRequest = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

