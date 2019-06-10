import Shop from "./Shop";
import Item from "./Item";

test("canary test", () => {
  const item = new Item("foo", 1, 3);
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(2);
});