function maxDistance(movements) {
  let distance = 0;
  let temp = 0;
  for (let movement of movements) {
    if (movement == ">") distance++;
    else if (movement == "<") distance--;
    else temp++;
  }

  if (distance >= 0) distance += temp;
  else distance -= temp;

  return Math.abs(distance);
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
