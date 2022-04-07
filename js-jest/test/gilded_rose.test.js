const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("quality never is negative", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("sulfuras could not be sold", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
  });

  it("sulfuras_could_not_decrease_quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(10);
  });

  it("quality_could_not_be_more_than_fifty", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("item_with_date_passed_quality_decrease_by_twice", function() {
    const gildedRose = new Shop([new Item("foo", -1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(38);
  });

  it("aged_brie_increase_quality_when_it_gets_older", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(41);
  });

  it("aged_brie_increase_by_two_quality_when_date_passed", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });

  it("aged_brie_increase_by_two_quality_when_date_passed_and_not_more_than_fifty", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("backstage_passes_increase_quality_by_two_when_sellin_less_than_ten", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });

  it("backstage_passes_increase_quality_by_three_when_sellin_less_than_five", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(43);
  });

  it("backstage_passes_increase_quality_by_two_when_sellin_less_than_six_and_not_more_than_fifty", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("backstage_passes_increase_quality_by_three_when_sellin_less_than_five_and_not_more_than_fifty", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("backstage_passes_quality_drops_to_zero_after_concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("backstage_passes_quality_increase_quality_by_one_when_date_is_more_than_10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(41);
  });
});