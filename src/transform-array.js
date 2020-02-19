module.exports = function transform(arr) {
  let array = [];
  if (!Array.isArray(arr)) throw new Error();

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === "--discard-next") {
      if (i < arr.length - 1) i++;
    } else if (arr[i] === "--discard-prev") {
      if (array.length > 0) array.pop();
    } else if (arr[i] === "--double-next") {
      if (i < arr.length - 1) array.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      if (i > 0) array.push(arr[i - 1]);
    } else {
      array.push(arr[i]);
    }
  }
  return array;
};
