class VigenereCipheringMachine {
  //https://www.youtube.com/watch?v=kueULgDkA5k - sourse
  en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  typeMachineDirect;
  constructor(type) {
    if (type === false) {
      this.typeMachineDirect = false;
    } else {
      this.typeMachineDirect = true;
    }
  }
  encrypt(msg, key) {
    if (msg == undefined || key == undefined) throw new Error("no args");
    msg = msg.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let res = [];
    let k = 0;
    for (let i = 0; i < msg.length; i++) {
      if (this.en.indexOf(msg[i]) != -1) {
        let code = (msg[i].charCodeAt() + key[k].charCodeAt()) % 26;
        if (code > 26) code -= 26;
        let char = String.fromCharCode(code + 65);
        res.push(char);
        k++;
        if (k > key.length - 1) k = 0;
      } else {
        res.push(msg[i]);
      }
    }
    if (this.typeMachineDirect) {
      return res.join("");
    } else {
      return res.reverse().join("");
    }
  }

  decrypt(msg, key) {
    if (msg == undefined || key == undefined) throw new Error("no args");
    msg = msg.toUpperCase().split("");
    key = key.toUpperCase().split("");
    let res = [];
    let k = 0;
    for (let i = 0; i < msg.length; i++) {
      if (this.en.indexOf(msg[i]) != -1) {
        let code = (msg[i].charCodeAt() - key[k].charCodeAt()) % 26;
        if (code < 0) code += 26;
        let char = String.fromCharCode(code + 65);
        res.push(char);
        k++;
        if (k > key.length - 1) k = 0;
      } else {
        res.push(msg[i]);
      }
    }
    if (this.typeMachineDirect) {
      return res.join("");
    } else {
      return res.reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
