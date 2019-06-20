window.cipher = {
  encode: (offset, string) => {

    let resultado1 = "";

    for (let i = 0; i < string.length; i++) {
      let numLetraAscii = string.charCodeAt(i);
      if (65 <= numLetraAscii && numLetraAscii <= 90) {
        resultado1 += String.fromCharCode((numLetraAscii - 65 + offset) % 26 + 65);
      } else if (numLetraAscii === 32) {
        resultado1 += " ";
      }
    }
    return resultado1;
  },

  decode: (offset, string) => {
    let resultado2 = "";
    for (let i = 0; i < string.length; i++) {
      let numLetraAscii = string.charCodeAt(i);
      if (65 <= numLetraAscii && numLetraAscii <= 90) {
        resultado2 += String.fromCharCode((numLetraAscii + 65 - offset) % 26 + 65);
      } else if (numLetraAscii === 32) {
        resultado2 += " ";
      }
    }
    return resultado2;
  }
};