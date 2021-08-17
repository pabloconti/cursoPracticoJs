
let lista = [1, 100, 200, 700, 500]; // Creamos una lista al azar
let calcularPromedioLista = (lista)=>{
            // SUMA ITEMS DE LISTA
let sumaLista = lista.reduce((acc = 0, item)=>{      
    return acc = acc + item;
    });
    
            // DIVIDIMOS LA SUMA ENTRE LA CANTIDAD DE ELEMENTOS
    let promedio = sumaLista / lista.length;
}


