class Empire {
  constructor() {
    //init mem

    this.shard = Game.shard.name;
    this.cities = _.filter(Game.rooms, r => r && r.controller && r.controller.my).map(r => r.name);
    console.log("Creating a new empire object on " + this.shard + " containing " + this.cities.length + " cities.");
    console.log(JSON.stringify(global.BOOST_COMPONENTS));
  }

  runCities() {
    console.log('Empire.runCities()');
    console.log(this.cities);
   this.cities.forEach(c => {
     let city = Game.rooms[c];
     if(city) {
       //console.log(city.name);
       //city.ProcessSources();
       // city.ProcessMinerals();
       // city.ProcessContainers();
       // city.ProcessRoomDefense();
       // city.ProcessTowers();
       // city.ProcessRoomHQ();
       //city.ProcessCreeps();
       // city.ProcessJobs();
       // city.ProcessWarRoom();
       // city.ProcessExpansion();
       // city.ProcessTombstones();
       // city.ManageInventory();
       // city.ProcessLabs();
       // city.ProcessNuker();
       // city.ProcessPowerSpawn();
       // city.ObserverRoomQueue();
       // city.ProcessObserver();
     }
   })
  }
}

module.exports = Empire;
