import { Ship } from "./app";

describe("test ship function", () => {
  test("correctly defines length", () => {
    const myShip = Ship(2);
    expect(myShip.length).toBe(2);
  });

  test("take hits", () => {
    const myShip = Ship(2);
    myShip.hit();
    expect(myShip.getHitCount()).toBe(1);
  });

  test("get sunk", () => {
    const myShip = Ship(2);
    myShip.hit();
    myShip.hit();
    expect(myShip.isSunk()).toBe(true);
  });
});

test("", () => {});
