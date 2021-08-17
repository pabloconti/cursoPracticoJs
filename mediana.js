let lista = [
    400,
    200,
    800,
    700,
    1000,
    11200,
    300,
    8000,
];

// ORDENAR LISTA DE NUMEROS
let comparacion = (a, b)=>{
    return a - b;
}
let ordenarLista = lista.sort(comparacion);


// CALCULO DE MEDIANA
let mediana;
let calcularMediana = (lista)=>{

    if (lista.length % 2 === 0) {
        elemento1 = (lista.length/2) - 1;
        elemento2 = (lista.length/2);
    
        mediana = (lista[elemento1] + lista[elemento2])/2;
        
    }else{
        mediana = parseInt(lista.length / 2);
    }

    return mediana;
}