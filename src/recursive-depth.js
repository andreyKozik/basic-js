module.exports = class DepthCalculator {
       calculateDepth(array) {
    if (!(array instanceof Array)) return 0;
       return array.reduce((a, b) => Math.max(a, this.calculateDepth(b)), 0)+1;
    }
};
