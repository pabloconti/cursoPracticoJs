let pablo = [1, 2, 2, 2, 2, 2, 5, 5, 5, 9];



let calcularModa = (list)=> {
    let modaPosition;
    let moda;
    
    let objeto = {};
    list.map(function(x){
        if (objeto[x]) {
            objeto[x] ++;
        }else{
            objeto[x] = 1;
        }
    })
    objeto = Object.entries(objeto).sort(function(a, b){return a[1] - b[1]});
    modaPosition = objeto.length - 1;
    moda = objeto[modaPosition];

    return moda;
}
 
console.log(calcularModa(pablo));