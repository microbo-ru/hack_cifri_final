'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');


module.exports.getRequestById = function getRequestById (req, res, next) {
  var id = req.swagger.params['id'].value;
  console.log(id)
  Default.getRequestById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServices = function getServices (req, res, next) {
  Default.getServices()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newRequest = function newRequest (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.newRequest(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
