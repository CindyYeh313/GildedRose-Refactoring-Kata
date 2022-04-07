class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.limit = 50
    this.lowerLimit = 0
  }
  updateQualityValue(value){
    if( this.quality < this.limit && this.quality > this.lowerLimit ) this.quality += value
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].name == 'Sulfuras, Hand of Ragnaros') return this.items

      if (this.items[i].name == 'Aged Brie') {
        this.items[i].updateQualityValue(1)
      }
      else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].updateQualityValue(1)
        if (this.items[i].sellIn < 11) {
          this.items[i].updateQualityValue(1)
        }
        if (this.items[i].sellIn < 6) {
          this.items[i].updateQualityValue(1)
        }
      } else {
        this.items[i].updateQualityValue(-1)
      }

      this.items[i].sellIn = this.items[i].sellIn - 1;
      
      if (this.items[i].name == 'Aged Brie'){
        if (this.items[i].sellIn < 0) {
          this.items[i].updateQualityValue(1)
        }  
      }
      else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
        if (this.items[i].sellIn < 0) {
          this.items[i].updateQualityValue(-this.items[i].quality)
        }
      } 
      else {
        if (this.items[i].sellIn < 0) {
          this.items[i].updateQualityValue(-1)
        }
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
