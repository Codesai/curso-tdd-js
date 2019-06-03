import * as shop from "./shop";
import {Item} from "./item";

test("canary test", () => {
  let item = new Item("foo", 1, 3);
  shop.initialize([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(2);
});