function calcularHidratacion() {
    var peso = parseInt(document.getElementById("inputPeso").value);

    // Validar que se haya ingresado un número válido
    if (isNaN(peso) || peso < 0) {
      document.getElementById("resultado").innerHTML = "Ingrese un peso válido.";
      return;
    }

    var cc;
    if (peso <= 10) {
      cc = peso * 100;
    } else if (peso <= 20) {
      cc = 1000 + (peso - 10) * 50;
    } else if (peso < 30) {
      cc = 1500 + (peso - 20) * 20;
    } else {
      document.getElementById("resultado").innerHTML = "YOU SHALL NOT PASS";
      return;
    }

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = cc;
  }
  //luego agrego las otras funciones
