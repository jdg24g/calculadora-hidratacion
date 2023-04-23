function calHidratacionBasal(peso) {
  if (peso >= 30) {
    let sc = (peso * 4 + 7) / (peso + 90);
    let ra = sc * 1500;
    let rb = sc * 2000;
    return ra;
  } else {
    if (peso <= 10) {
      let cc = peso * 100;
      return cc;
    } else if (peso <= 20) {
      let cc = 1000 + (peso - 10) * 50;
      return cc;
    } else if (peso < 30) {
      let cc = 1500 + (peso - 20) * 20;
      return cc;
    } else {
      return cc;
    }
  }
}

const BOTON = document.getElementById("calcular");
const ERR = document.getElementById("error");
let res = document.getElementById("yun");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");

BOTON.addEventListener("click", () => {
  const INPUT = document.getElementById("peso");
  const PESO = INPUT.value;
  if (PESO > 0) {
    cpeso = +PESO;
    res.innerText = " cc/día: " + calHidratacionBasal(cpeso);
    flu = calHidratacionBasal(cpeso)
    /*
    solucionar este problema
    mm2 = flu * 1,5 */
    flu = flu/24

    //MAN.innerText= mm2
    FLU.innerText= flu + "cc/h"
    ERR.style.display = "none";
    MAN.style.display = "block";
    FLU.style.display = "block";
    res.style.display = "block";
  } else {
    ERR.style.display = "block";
    MAN.style.display = "none";
    FLU.style.display = "none";
    res.style.display = "none";
  }
});