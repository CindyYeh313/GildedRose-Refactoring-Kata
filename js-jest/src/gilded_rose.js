class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  increaseQuality (quality) {
    if( quality < 50 ) return quality + 1
    return quality
  }

  decreaseQuality (quality){
    if( quality > 0 ) return  quality - 1
    return quality
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].name == 'Sulfuras, Hand of Ragnaros') return this.items

      if (this.items[i].name == 'Aged Brie') {
        this.items[i].quality = this.increaseQuality(this.items[i].quality)
      }
      else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].quality = this.increaseQuality(this.items[i].quality)
        if (this.items[i].sellIn < 11) {
          this.items[i].quality = this.increaseQuality(this.items[i].quality)
        }
        if (this.items[i].sellIn < 6) {
          this.items[i].quality = this.increaseQuality(this.items[i].quality)
        }
      } else {
          this.items[i].quality = this.decreaseQuality(this.items[i].quality);
      }

      this.items[i].sellIn = this.items[i].sellIn - 1;
      
      if (this.items[i].name == 'Aged Brie'){
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.increaseQuality(this.items[i].quality)
        }  
      }
      else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }
      } 
      else {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = this.decreaseQuality(this.items[i].quality)
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
