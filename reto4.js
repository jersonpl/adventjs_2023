function decode(message = "") {
  let match = message.match(/\(([^()]+?)\)/)?.[0];

  while (match) {
    const index = message.indexOf(match);
    message =
      message.slice(0, index) +
      match.slice(1, -1).split("").reverse().join("") +
      message.slice(index + match.length);
    match = message.match(/\(([^()]+)\)/g)?.[0];
  }

  return message;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

// const b = decode("(olleh) (dlrow)!"); //(nosrej)
// console.log(b); // hello world!

// const c = decode("sa(u(cla)atn)s ho(b(ri)r)le");
// console.log(c); // santaclaus

const d = decode(
  " sa(u(cla)atn)s (olleh) sa(u(cla)atn)s (dlrow)! sa(u(cla)atn)s"
);
console.log(d); // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
