
let calcularDescuentos = (precioOriginal, descuento) => {
    let porcentajePrecioConDescuento = 100 - descuento;
    let precioFinal = (precioOriginal * porcentajePrecioConDescuento)/100;
    
    return precioFinal;
}



let calculateDiscount = () =>{
    let originalPrice = document.getElementById("startingPrice").value;
    let percentDiscount = document.getElementById("percentDiscount").value;

    let finalPrice = calcularDescuentos(originalPrice, percentDiscount);
    let p = document.getElementById("pToInformPrice");
    p.innerText = "Final price $" + finalPrice;
}

const applyCoupon = () =>{
    let item_prices = 
    [
        playstation = 100000,
        joystick = 5000,
        calculator = 100,
        mouse = 1000
    ];
    let finalPrice;
    let coupon = document.getElementById('percentDiscount').value;
    let new_price = document.getElementById('new_price');
    let discount;
    switch (coupon) {
        
        case 'coupon1':
                discount = 50;
                finalPrice = calcularDescuentos(item_prices[0],discount);
                new_price.innerText = `$${finalPrice}`;
            break;

            case 'coupon2':
                discount = 10;
                finalPrice = calcularDescuentos(item_prices[1],discount);
                new_price.innerText = `$${finalPrice}`;
            break;
        
        
            case 'coupon3':
                discount = 5;
                finalPrice = calcularDescuentos(item_prices[2],discount);
                new_price.innerText = `$${finalPrice}`;
            break;
        
        
            case 'coupon4':
                discount = 20;
                finalPrice = calcularDescuentos(item_prices[3],discount);
                new_price.innerText = `$${finalPrice}`;
            break;
        
        
        
            default:
            break;
    }

}