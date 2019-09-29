'use strict';

var utils = require('../utils/writer.js');
var Rosreestr = require('../service/RosreestrService');

module.exports.getRosreestr = function getRosreestr (req, res, next) {
  var address = req.swagger.params['address'].value;
  Rosreestr.getRosreestr(address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
