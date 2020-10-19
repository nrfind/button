Object.defineProperty(Room.prototype, 'sources', {
    get: function() {
        if (!this._sources) {
            if (!this.memory.sourceIds) {
                this.memory.sourceIds = this.find(FIND_SOURCES)
                                        .map(source => source.id);
            }
            this._sources = this.memory.sourceIds.map(id => Game.getObjectById(id));
        }
        return this._sources;
    },
    enumerable: false,
    configurable: true
});

Room.prototype.ProcessSources =
  function() {
    this.sources.forEach(s => {
      console.log(s);
    })
  }
