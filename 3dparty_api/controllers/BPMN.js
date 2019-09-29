'use strict';

var utils = require('../utils/writer.js');
var BPMN = require('../service/BPMNService');

module.exports.getProcessById = function getProcessById (req, res, next) {
  var id = req.swagger.params['id'].value;
  BPMN.getProcessById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newProcess = function newProcess (req, res, next) {
  var body = req.swagger.params['body'].value;
  BPMN.newProcess(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
