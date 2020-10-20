class Market {
  constructor() {
    console.log("Refreshing Market Prices");
    RESOURCES_ALL.forEach(r => {
      const tryMkt = Game.market.getHistory(r);
      if(tryMkt && tryMkt.length > 0) {
        const mktHist = tryMkt.reverse()
        let obj = {};
        let i = 1;
        let avg = 0;
        if(mktHist) {
          mktHist.forEach(d => {
            avg+= d.avgPrice;
            if(i === 1) {
              obj.dailyAvg = avg / i;
            }
            if(i === 3) {
              obj.movingAvg3 = avg / i;
            }
            if(i === 7) {
              obj.movingAvg7 = avg / i;
            }
            if(i === 14) {
              obj.movingAvg14 = avg / i;
            }
            i++;
          })
          obj.minSell = Math.min(...Game.market.getAllOrders({ type: ORDER_SELL, resourceType: r}).map(x => x.price));
          obj.maxBuy = Math.max(...Game.market.getAllOrders({ type: ORDER_BUY, resourceType: r }).map(x => x.price));

          //to do, calc a more dynamic value
          obj.value = obj.dailyAvg;

          //calc raw cost of processed resources based on all individual part costs
          const c = COMMODITIES[r];
          if(c) {
            let rawCost = 0;
            Object.keys(c.components).forEach(k => {
              if(Memory.market[k]) rawCost += (Memory.market[k].value * (c.components[k] / c.amount));
              else rawCost = null
            })
            obj.rawCost = rawCost;
          }
          const b = BOOST_COMPONENTS[r];
          if(b) {
            let rawCost = 0;
            b.forEach(i => {
              if(rawCost != null) {
                if(Memory.market[i] && Memory.market[i].value)
                  rawCost += (Memory.market[i].value);
                else
                  rawCost = null
              }
            })
            obj.rawCost = rawCost;
          }
          this[r] = obj;
        }
      }
    })
  }
}
