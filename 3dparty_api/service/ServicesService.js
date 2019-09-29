'use strict';


/**
 * Возвращает список всех поддерживаемых услуг
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

