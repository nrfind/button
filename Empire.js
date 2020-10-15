export class Empire {
  cities: [];

  constructor() {
    //init mem

    this.shard = Game.shard.name;
    this.cities = _.filter(Game.rooms, r => r && r.controller && r.controller.my), r=> r.controller.level * -1);
    console.log("Creating a new empire object on " + this.shard + " containing " + this.cities.length + " cities.");
  }

  runCities() {
    console.log('Empire.runCities()');
    this.cities.forEach(c => {
      let city = Game.rooms[c];
      if(city) {
        console.log(city.name);
      }
    })
  }
}
