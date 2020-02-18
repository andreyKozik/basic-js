const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sAct) {
  let counter = 0;
   if( typeof sAct === 'string') {
    sAct.split('').map(a => {if (a === '.') counter++})
    if (counter > 1) {sAct = sAct.slice(0, 7)}
   }
  let b = +sAct
  if (typeof b === "number" && typeof sAct === "string" && b > 0 && b < 15) {
    return Math.ceil(Math.log(15 / b) / (0.693 / 5730));
  } else {
    return false;
  }
};
