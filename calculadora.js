// Función que añade un valor al campo de la calculadora
function addToScreen(value) {
    document.getElementById("screen").value += value;
    document.getElementById("screen").focus();
  }
  
  // Función que limpia el campo de la calculadora
  function clearScreen() {
    document.getElementById("screen").value = "";
    document.getElementById("screen").focus();
  }
  
  // Función que realiza el cálculo
  function calculate() {
    var expression = document.getElementById("screen").value;
    var result = eval(expression);
    document.getElementById("screen").value = result;
    document.getElementById("screen").focus();
  }

  // Función que borra
  function deleteLast() {
    var screenValue = document.getElementById("screen").value;
    if (screenValue.length > 1) {
      document.getElementById("screen").value = screenValue.substring(0, screenValue.length - 1);
    } else {
      document.getElementById("screen").value = "";
    }
    document.getElementById("screen").focus();
  }