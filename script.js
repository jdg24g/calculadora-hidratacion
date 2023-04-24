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
const INPUT = document.getElementById("peso");

INPUT.addEventListener('click', () => {
  ERR.style.display = "none";
  MAN.style.display = "none";
  FLU.style.display = "none";
  res.style.display = "none";
})

BOTON.addEventListener("click", () => {
  
  const PESO = INPUT.value;
  if (PESO > 0) {
    cpeso = +PESO;
    res.innerText = " cc/día: " + Math.round(calHidratacionBasal(cpeso));
    flu = calHidratacionBasal(cpeso)
    
   
    flu = flu/24;
    mm2 = flu * 1.5 ;
    console.log(mm2);

    MAN.innerText= "m+m/2: "+Math.round(mm2)
    FLU.innerText= Math.round(flu) + " cc/h"
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