require('./include');

global.Empire = new Empire();

module.exports.loop = function () {
  global.Empire.runCities();
}
