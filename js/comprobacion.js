
function Verificarpareimpar(){
    let numero = document.getElementById("numero").value;
    if(numero===""){
      //document.write('Falta el nombre')
      alert('Espacio vacio');
      document.getElementById('numero').focus();
      document.getElementById('numero').style.backgroundColor="red";
      return false; 
  }else{
    if (numero % 2 ===0) {
        alert("Es par");
      } else {
        alert("Es impar");
      } 
    }
}

function VerificarTexto(){
    let texto = document.getElementById("texto").value;

    if(texto===""){
      //document.write('Falta el nombre')
      alert('Espacio vacio');
      document.getElementById('texto').focus();
      document.getElementById('texto').style.backgroundColor="red";
      return false; 
  }else{
    if (texto ===texto.toUpperCase()) {
      alert("Es mayuscula");
    } else if(texto ===texto.toLowerCase()){
      alert("Es minuscula");
    }else{
      alert("El texto posee ambas")
    }
  }

}




function VerificarPalabra(){
    let comprobacion = document.getElementById("comprobacion").value;
    if(comprobacion===""){
      //document.write('Falta el nombre')
      alert('Espacio vacio');
      document.getElementById('comprobacion').focus();
      document.getElementById('comprobacion').style.backgroundColor="red";
      return false; 
  }else{
    comprobacion = comprobacion.toLowerCase().replace(/\s/g, "");
  var comprobacionInvertida = "";

  for (var i = comprobacion.length - 1; i >= 0; i--) {
    comprobacionInvertida += comprobacion[i];
  }
  if (comprobacion === comprobacionInvertida) {
    alert("Es polidromo");
  } else {
    alert("No es polidromo");
  }
}

}
