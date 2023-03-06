const Ship = (size) => {
  const length = size;
  let hitCount = 0;

  const hit = () => {
    hitCount++;
    return hitCount;
  };

  const isSunk = () => {
    return hitCount >= length;
  };

  const getHitCount = () => {
    return hitCount;
  };

  return {
    length,
    hit,
    isSunk,
    getHitCount,
  };
};

const GameBoard = () => {
  const board = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }).fill(0)
  );

  const placeShips = (ship, x, y, orientation) => {};

  const recieveAttack = () => {};

  const allSunk = () => {};
};

export { Ship, GameBoard };
