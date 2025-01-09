function transformTree(tree = [1]) {
  const getTree = (temp) => {
    if (!tree.length) return null;
    let res = {};
    res.value = tree[0] ?? null;
    tree = tree.slice(1);
    res.left = tree[0] ?? null;
    tree = tree.slice(1);
    res.right = tree[0] ?? null;
    return res;
  };

  return tree.reduce((acc, cur) => {
    acc = getTree();
    return acc;
  }, {});
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
// console.log(transformTree([3, 1, 0]));
// {
//   value: 3,
//   left: {
//     value: 1,
//     left: {
//       value: 8,
//       left: null,
//       right: null
//     },
//     right: {
//       value: 12,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     value: 0,
//     left: null,
//     right: {
//       value: 1,
//       left: null,
//       right: null
//     }
//   }
// }
