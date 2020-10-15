class Empire {
  constructor() {
    //init mem

    this.shard = Game.shard.name;
    this.cities = _.filter(Game.rooms, r => r && r.controller && r.controller.my);
    console.log("Creating a new empire object on " + this.shard + " containing " + this.cities.length + " cities.");
    console.log(global.BOOST_COMPONENTS);
  }

  runCities() {
    console.log('Empire.runCities()');
    console.log(this.cities);
   this.cities.forEach(c => {
     let city = Game.rooms[c];
     if(city) {
       console.log(city.name);
     }
   })
  }
}

module.exports = Empire;
