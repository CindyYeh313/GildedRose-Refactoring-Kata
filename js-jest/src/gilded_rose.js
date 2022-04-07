class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.limit = 50
    this.lowerLimit = 0
  }

  updateQualityValue (value){
    if( this.quality < this.limit && this.quality > this.lowerLimit ) this.quality += value
  }

  updateDaily(){
    this.sellIn --
    switch(this.name){
      case 'Sulfuras, Hand of Ragnaros':
        this.updateSulfuras()
        break
      case 'Aged Brie':
        this.updateAgedBrie()
        break
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateBackstage()
        break
      default:
        this.updateNormal()
    }
  }

  updateSulfuras(){
    this.sellIn ++
    return this
  }

  updateAgedBrie(){
    this.updateQualityValue(1)
    if (this.sellIn < 0) {
      this.updateQualityValue(1)
    }  
    return this
  }

  updateBackstage(){
    this.updateQualityValue(1)
    if (this.sellIn < 10) this.updateQualityValue(1)
    if (this.sellIn < 5) this.updateQualityValue(1)
    if (this.sellIn < 0) {
      this.updateQualityValue(-this.quality)
    }
    return this
  }

  updateNormal(){
    this.updateQualityValue(-1)
    if (this.sellIn < 0) {
      this.updateQualityValue(-1)
    }
    return this
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
