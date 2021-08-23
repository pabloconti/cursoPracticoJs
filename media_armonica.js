const  kilometrosPorHora = [20, 14, 9, 16]
let kmPorVuelta = 2;

function mediaArmonica(valoresVariables, valorFijo){

    //Formula de media armónica: 
   //N * (1/valoresVariables[0] + 1/valoresVariables[1] + 1/valoresVariables[2] + 1/valoresVariables[n]...)

    let unoSobredivisor = valoresVariables.map((valoresVariables) => 1/valoresVariables);
    let divisor = unoSobredivisor.reduce((acc, item) => acc + item);
    let mediaArmonica = valorFijo/divisor;  

    return mediaArmonica;
}

console.log(mediaArmonica(kilometrosPorHora, kmPorVuelta));
