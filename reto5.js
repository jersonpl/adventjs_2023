function cyberReindeer(road = "", time) {
  let roadTemp = road;
  let result = [road];

  road = road.replace("S", ".");

  let index = 1;

  for (let i = 1; i < time; i++) {
    if (i == 5) {
      roadTemp = roadTemp.replaceAll("|", "*");
      road = road.replaceAll("|", "*");
    }
    if (i < 5 && road[index] == "|") {
      result.push(roadTemp);
      continue;
    }
    roadTemp =
      roadTemp.substring(0, index) + "S" + roadTemp.substring(index + 1);
    roadTemp =
      roadTemp.substring(0, index - 1) +
      road[index - 1] +
      roadTemp.substring(index);

    result.push(roadTemp);
    index++;
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
