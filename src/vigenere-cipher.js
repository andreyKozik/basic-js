class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error("Missing parameters");

    let encryptedMessage = "";
    key = key
      .repeat(Math.ceil(message.length / key.length))
      .slice(0, message.length)
      .toUpperCase();
    message = message.toUpperCase();
    let j = -1;

    for (let i = 0; i < message.length; i++) {
      if (message[i] != " ") j++;
      encryptedMessage +=
        message[i].charCodeAt(0) > 64 && message[i].charCodeAt(0) < 91
          ? String.fromCharCode(
              ((message.charCodeAt(i) + key.charCodeAt(j)) % 26) + 65
            )
          : message[i];
    }

    return this.isDirect
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error("Missing parameters");

    let message = "";
    key = key
      .repeat(Math.ceil(encryptedMessage.length / key.length))
      .slice(0, encryptedMessage.length)
      .toUpperCase();
    encryptedMessage = encryptedMessage.toUpperCase();
    let j = -1;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] != " ") j++;
      message +=
        encryptedMessage[i].charCodeAt(0) > 64 &&
        encryptedMessage[i].charCodeAt(0) < 91
          ? String.fromCharCode(
              ((encryptedMessage.charCodeAt(i) + 26 - key.charCodeAt(j)) % 26) +
                65
            )
          : encryptedMessage[i];
    }

    return this.isDirect ? message : message.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
