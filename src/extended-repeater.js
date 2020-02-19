module.exports = function repeater(str, o) {
  if (o.separator === undefined) o.separator = "+";
  if (o.addition === undefined) o.addition = "";
  let result = "";
  result += str;
  while (o.additionRepeatTimes > 1) {
    result += o.addition;
    result += o.additionSeparator;
    o.additionRepeatTimes--;
  }
  result += o.addition;
  let clone = result;
  while (o.repeatTimes > 1) {
    result += o.separator;
    result += clone;
    o.repeatTimes--;
  }
  //   result += clone;
  return result;
};
