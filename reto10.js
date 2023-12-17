function createChristmasTree(ornaments = "a", height = 1) {
  let result = "";
  let index = 0;
  for (let i = 1; i <= height; i++) {
    result += " ".repeat(height - i);

    for (let j = 0; j < i; j++) {
      result += ornaments[index];
      if (j !== i - 1) {
        result += " ";
      }
      index = (index + 1) % ornaments.length;
    }

    result += "\n";
  }
  return result + " ".repeat(height - 1) + "|\n";
}

const result1 = createChristmasTree("123", 3);
console.log(result1);
