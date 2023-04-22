function calHiBa(peso) {
    if (peso >= 30) {
      let sc = ((peso * 4) + 7) / (peso + 90);
      let ra = sc * 1500;
      let rb = sc * 2000;
      console.log("Multiplicado por 1500:");
      console.log(ra);
      console.log("Multiplicado por 2000:");
      console.log(rb);
    } else {
      if (peso <= 10) {
        let cc = peso * 100;
        console.log(cc);
      } else if (peso <= 20) {
        let cc = 1000 + (peso - 10) * 50;
        console.log(cc);
      } else if (peso < 30) {
        let cc = 1500 + (peso - 20) * 20;
        console.log(cc);
      } else {
        console.log("YOU SHALL NOT PASS");
      }
    }
}