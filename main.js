require('config');
require('util');
require('constants');
require('Prototype.Room.Creeps');
require('Prototype.Room.Sources');
const Empire = require('Empire');
const Market = require('Market');

global.Empire = new Empire();
global.Market = new Market();

if(Memory.sources === undefined) Memory.sources = {};


module.exports.loop = function () {
  global.Empire.runCities();
}
