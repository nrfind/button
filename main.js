require('config');
require('util');
const Empire = require('Empire');

global.Empire = new Empire();

module.exports.loop = function () {
  global.Empire.runCities();
}
