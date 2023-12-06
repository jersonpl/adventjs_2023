function findNaughtyStep(original, modified) {
  const isLargest = modified.length > original.length;
  for (let i = 0; i < modified.length; i++) {
    if (original[i] != modified[i]) {
      return (isLargest ? modified : original)[i];
    }
  }
  return "";
}

const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified) === "e"); // 'e'

const original1 = "stepfor";
const modified1 = "stepor";
console.log(findNaughtyStep(original1, modified1) === "f"); // 'f'

const original2 = "abcde";
const modified2 = "abcde";
console.log(findNaughtyStep(original2, modified2) === ""); // ''
