/******************* DECLARACION VARIABLES Y FUNCIONES ***********************/

/********************* FUNCIONES / HELPERS ***************************/

// ORDENAR LISTA DE NUMEROS
let ordenarLista = (lista) =>{
    return lista.sort((a, b)=> a-b);
}

// CALCULO DE MEDIANA
let calcularMediana = (lista)=>{
    let mediana;
    if (lista.length % 2 === 0) {
        elemento1 = (lista.length/2) - 1;
        elemento2 = (lista.length/2);
    
        mediana = (lista[elemento1] + lista[elemento2])/2;
        
    }else{
        mediana = parseInt(lista.length / 2);
    }

    return mediana;
}

// CALCULO DE DESCUENTO

let calcularDescuentos = (precioOriginal, descuento) => {
    let porcentajePrecioConDescuento = 100 - descuento;
    let precioFinal = (precioOriginal * porcentajePrecioConDescuento)/100;
    
    return precioFinal;
}


/********************* WORK SPACE *****************************/

// MEDIANA SALARIOS
const salarios = personas.map((personas)=> personas.salario);
const listaSalariosOrdenada = ordenarLista(salarios);
const medianaSalarios = calcularMediana(listaSalariosOrdenada);

// MEDIANA TOP 10%

const salariosTop10 = listaSalariosOrdenada.slice(calcularDescuentos(listaSalariosOrdenada.length, 10), listaSalariosOrdenada.length);
const medianaSalariosTop10 = calcularMediana(salariosTop10);
