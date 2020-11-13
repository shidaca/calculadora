document.getElementById("btn_enviar").addEventListener("click", sumarnum);
document.getElementById("btn_enviar").addEventListener("click", restarnum);
document.getElementById("btn_enviar").addEventListener("click", multiplicarnum);
document.getElementById("btn_enviar").addEventListener("click", dividirrnum);


function sumarnum(varnum1, varnum2) {
  var num1 = parseInt(document.getElementById("txt_num1").value);
  var num2 = parseInt(document.getElementById("txt_num2").value);

  var suma = num1 + num2;

  alert("La suma es: " + suma);
}

function restarnum(varnum1, varnum2) {
  var num1 = parseInt(document.getElementById("txt_num1").value);
  var num2 = parseInt(document.getElementById("txt_num2").value);

  var resta = num1 - num2;

  alert("La resta es: " + resta);
}

function multiplicarnum(varnum1, varnum2) {
  var num1 = parseInt(document.getElementById("txt_num1").value);
  var num2 = parseInt(document.getElementById("txt_num2").value);

  var multiplicacion = num1 * num2;

  alert("La multiplicacion es: " + multiplicacion);
}


function dividirrnum(varnum1, varnum2) {
    var num1 = parseInt(document.getElementById("txt_num1").value);
    var num2 = parseInt(document.getElementById("txt_num2").value);
  
    var dividir = num1 / num2;
  
    alert("La División es: " + dividir);
  }