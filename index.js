var stringify = require('json-stable-stringify')
  , crc32 = require('buffer-crc32')
  , encoder = require('int-encoder')

module.exports = function (obj) {
  return encoder.encode(crc32.unsigned(stringify(obj)));
};
