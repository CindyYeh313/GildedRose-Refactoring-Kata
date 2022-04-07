class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.limit = 50
    this.lowerLimit = 0
  }

  increaseQuality (value){
    if( this.quality < this.limit && this.quality > this.lowerLimit ) this.quality += value
  }

  updateDaily(){
    this.sellIn --
    switch(this.name){
      case 'Sulfuras, Hand of Ragnaros':
        this.sellIn ++
        break
      case 'Aged Brie':
        this.updateAgedBrieQuality()
        break
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateBackstageQuality()
        break
      default:
        this.updateNormalQuality()
    }
  }
  
  updateAgedBrieQuality(){
    this.increaseQuality(1)
    if (this.sellIn < 0) {
      this.increaseQuality(1)
    }  
  }

  updateBackstageQuality(){
    this.increaseQuality(1)
    if (this.sellIn < 10) this.increaseQuality(1)
    if (this.sellIn < 5) this.increaseQuality(1)
    if (this.sellIn < 0) {
      this.increaseQuality(-this.quality)
    }
  }

  updateNormalQuality(){
    this.increaseQuality(-1)
    if (this.sellIn < 0) {
      this.increaseQuality(-1)
    }
  }
}


class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item=>item.updateDaily())
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
