import Shop from "./shop";
import Item from "./item";

test("canary test", () => {
  const item = new Item("foo", 1, 3);
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(2);
});