function maxDistance(movements = "") {
  return (
    Math.abs(
      (movements.match(/>/g)?.length ?? 0) -
        (movements.match(/</g)?.length ?? 0)
    ) + (movements.match(/\*/g)?.length ?? 0)
  );
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
