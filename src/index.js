const pagina1 = document.getElementById('pantalla1');
const pagina2 = document.getElementById('pantalla2');
const boton = document.getElementById('btn');

// eslint-disable-next-line no-unused-vars
const contraseña = document.getElementById('contraseña');
// eslint-disable-next-line no-unused-vars
const atras = document.getElementById('atras');


let contador = 0;

boton.addEventListener("click", (event) => {
  event.preventDefault();
  const contraseña = document.getElementById('contraseña').value;


  if (contraseña === "LABORATORIA") {
    pagina1.classList.add("hide");
    pagina2.classList.remove("hide");
  }
  else {
    contador = contador + 1;
    document.getElementById('error').innerHTML = "LA CONTRASEÑA ES INCORRECTA"
    if (contador === 3) {
      document.getElementById('error').innerHTML = "LA CONTRASEÑA ES INCORRECTA VUELVA A INTENTARLO MAS TARDE"
    }
  }

});


// eslint-disable-next-line no-undef
cifrar.addEventListener("click", () => {
  let desplazar = parseInt(document.getElementById("desplazar").value)
  let texto = document.getElementById("texto").value;
  let resultadofinal = cipher.encode(desplazar, texto);
  document.getElementById("resultado").value = resultadofinal;
});

// eslint-disable-next-line no-undef
descifrar.addEventListener("click", () => {
  let desplazar = parseInt(document.getElementById("desplazar").value)
  let texto = document.getElementById("texto").value;
  let resultadofinal = cipher.decode(desplazar, texto);
  document.getElementById("resultado").value = resultadofinal;
});



