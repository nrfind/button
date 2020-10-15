require('config');
require('util');
require('constants');
const Empire = require('Empire');

global.Empire = new Empire();

module.exports.loop = function () {
  global.Empire.runCities();
}
