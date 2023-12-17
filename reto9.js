function adjustLights(lights = [""]) {
  // regex find two characters consecutive

  // let text = lights.join("");

  // const getMath = (temp = "") => temp.match(/🟢🟢|🔴🔴/g);

  // let index = 0;
  // let data = getMath(text);

  // while (data?.length) {
  //   const isIn = text.indexOf(data[0]);
  //   const isGreen = data[0] === "🟢🟢";
  //   // lights[isIn + (isGreen ? 1 : 0)] = isGreen ? "🔴" : "🟢";
  //   text =
  //     text.slice(0, isIn + (isGreen ? 1 : 0)) +
  //     (isGreen ? "🔴" : "🟢") +
  //     text.slice(isIn + (isGreen ? 2 : 1));
  //   data = getMath(lights.join(""));
  //   index++;
  //   console.log(text);
  //   break;
  // }

  // return index;

  return lights.reduce((acc, cur, index, arr) => {
    console.log({
      first: !arr[index - 1] || arr[index - 1] === cur,
      second: arr[index + 1] === cur,
    });
    if ((!arr[index - 1] || arr[index - 1] === cur) && arr[index + 1] === cur)
      return acc + 1;
    return acc;
  }, 0);
}

// const result1 = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
// console.log(result1, result1 === 1);
// -> 1 (cambias la cuarta luz a 🔴)

// const result2 = adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]);
// console.log(result2, result2 === 1);
// // // -> 1 (cambia la primera luz a verde)

const result3 = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
console.log(result3, result3 === 2);
// // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

// const result4 = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
// console.log(result4, result4 === 0);
// // -> 0 (ya están alternadas)

// const result5 = adjustLights(["🔴", "🔴", "🔴"]);
// console.log(result5, result5 === 1);
// // -> 1 (cambias la segunda luz a 🟢)
