const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.chain.length && typeof position === 'number') {
      this.chain.splice(position-1,1)
      return this
    } else {
      this.chain = [];
      throw 'Error';
    }
  },
  reverseChain() {
    this.chain.sort(a => -1);
    return this
  },

  finishChain() {
    const result = this.chain.join(' )~~( ');
    this.chain = [];
    return `( ${result} )`
  }
};

module.exports = chainMaker;
