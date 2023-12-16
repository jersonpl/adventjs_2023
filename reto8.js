function organizeGifts(gifts = "") {
  const byGift = gifts.match(/(\d+)([a-z])/g);

  let result = "";

  for (const item of byGift) {
    const total = item.slice(0, -1);
    const letter = item.slice(-1);
    const palets = parseInt(total / 50);
    if (palets > 0) {
      result += `[${letter}]`.repeat(palets);
    }
    const boxes = parseInt((total % 50) / 10);
    if (boxes > 0) {
      result += `{${letter}}`.repeat(boxes);
    }
    const individual = total % 10;
    if (individual > 0) {
      result += `(${letter.repeat(individual)})`;
    }
  }

  return result;
}

const result1 = organizeGifts(`76a11b`);
console.log(result1, result1 === "[a]{a}{a}(aaaaaa){b}(b)");
