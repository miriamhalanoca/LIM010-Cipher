window.cipher = {
  encode: (offset, string) => {
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
      let numLetraAscii  = string.charCodeAt(i);
      if (65<=numLetraAscii && numLetraAscii <= 90) 
        resultado+= String.fromCharCode((numLetraAscii - 65 + offset) % 26 + 65);
     else if 
    (numLetraAscii === 32 )
    resultado += " ";
}
  return resultado;
},

decode: (offset, string) => {
  let resultado = "";
  for (let i = 0; i < string.length; i++) {
    let numLetraAscii  = string.charCodeAt(i);
    if (65<=numLetraAscii && numLetraAscii <= 90) 
      resultado+= String.fromCharCode((numLetraAscii + 65 - offset) % 26 + 65);
    else if
      (numLetraAscii === 32 )
      resultado += " ";
  }
    return resultado;
  }
};