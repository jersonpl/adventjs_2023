function cyberReindeer(road = "", time) {
  let result = [road];
  let originalRoad = "." + road.substring(1);

  let position = 1;
  for (let frame = 1; frame < time; frame++) {
    if (frame == 5) originalRoad = originalRoad.replaceAll("|", "*");
    else if (originalRoad[position] == "|") {
      result.push(result.at(-1));
      continue;
    }
    result.push(
      originalRoad.substring(0, position) +
        "S" +
        originalRoad.substring(position + 1)
    );
    position++;
  }
  return result;
}

const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(JSON.stringify(result, null, 2));
console.log(
  JSON.stringify(result) ==
    JSON.stringify([
      "S..|...|..", // estado inicial
      ".S.|...|..", // avanza el trineo la carretera
      "..S|...|..", // avanza el trineo la carretera
      "..S|...|..", // el trineo para en la barrera
      "..S|...|..", // el trineo para en la barrera
      "...S...*..", // se abre la barrera, el trineo avanza
      "...*S..*..", // avanza el trineo la carretera
      "...*.S.*..", // avanza el trineo la carretera
      "...*..S*..", // avanza el trineo la carretera
      "...*...S..", // avanza por la barrera abierta
    ])
);
