function decode(message) {
  const getToReverse = (message) => {
    let toReverse = null;
    let index = 0;
    for (let item of message.split("")) {
      if (item == "(") toReverse = { begin: index };
      else if (item == ")") {
        toReverse.end = index;
        break;
      }
      index++;
    }
    return toReverse;
  };

  let data = getToReverse(message);

  let result = "";
  while (data) {
    result =
      message.substring(0, data.begin) +
      message
        .substring(data.begin + 1, data.end)
        .split("")
        .reverse()
        .join("") +
      message.substring(data.end + 1);
    message = result;
    data = getToReverse(message);
  }
  return result;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!"); //(nosrej)
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s ho(b(ri)r)le");
console.log(c); // santaclaus

const d = decode("(olleh) sa(u(cla)atn)s (dlrow)! sa(u(cla)atn)s");
console.log(d); // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
