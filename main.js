require('config');
require('util');
require('constants');
require('Prototype.Room.Creeps');
require('Prototype.Room.Sources');
const Empire = require('Empire');

global.Empire = new Empire();

if(Memory.sources === undefined) Memory.sources = {};


module.exports.loop = function () {
  global.Empire.runCities();
}
