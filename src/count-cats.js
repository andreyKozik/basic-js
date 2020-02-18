module.exports = function countCats(matrix) {
  let counter = 0;
  [].concat(...matrix).map(a => {
    if (a === '^^') counter++
  });
  return counter;
};
