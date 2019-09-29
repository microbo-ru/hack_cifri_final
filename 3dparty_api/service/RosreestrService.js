'use strict';


/**
 * Получить кадастровый номер (внешний - заглушка)
 *
 * address String Адрес объекта
 * returns RosreestrResp
 **/
exports.getRosreestr = function(address) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "kadastrNumber" : "12345:3455:33"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

