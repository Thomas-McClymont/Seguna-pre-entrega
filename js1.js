const remeras = [
    {id: 1,sexo:"Masculino", talle: "S", precio: 3000, material: "algodón"},
    {id: 2,sexo:"Masculino", talle: "M", precio: 3500, material: "algodón"},
    {id: 3,sexo:"Masculino", talle: "L", precio: 3750, material: "algodón"},
    {id: 4,sexo:"Femenino", talle: "S", precio: 4000, material: "lana"},
    {id: 5,sexo:"Femenino", talle: "M", precio: 4500, material: "lana"},
    {id: 6,sexo:"Femenino", talle: "L", precio: 4750, material: "lana"}, 
]

let shoppingChart = []

let comprar = prompt("Desea hacer una compra?")

while(comprar != "si" && comprar != "no"){
    alert ("Por favor ingrese: si o no")
    comprar = prompt("Desea hacer una compra?")
}

if (comprar == "si"){
    alert("Remeras:")
    for (const remera of remeras) {
        alert("Modelo" + " " + remera.id + ": $" + remera.precio + ", Talle:" + " " + remera.talle + " " + "de" + " " + remera.material )
    }
} else if (comprar == "no"){
    alert("Saludos!!!")
}

while (comprar != "no"){
    let producto = prompt("Agregue una remera a su carrito")
    let precio = 0

    if ( producto == 1 || producto == 2 || producto == 3 || producto == 4 || producto == 5 || producto == 6 ) {
        switch(producto){
            case "1":
                precio = 3000;
                break;
            case "2":
                precio = 3500;
                break;
            case "3":
                precio = 3750;
                break;
            case "4":
                precio = 4000;
                break;
            case "5":
                precio = 4500;
                break;
            case "6":
                precio = 4750;
                break;
            default:
                break
        }
    let unidades = parseInt (prompt("Cuántas remeras quiere llevar?"))

    shoppingChart.push({producto, precio, unidades})
    console.log(shoppingChart)
    } else {
        alert("No contamos con ese producto")
    }

    comprar = prompt("Desea seguir comprando?")

    while(comprar == "no"){
        alert("Muchas gracias por su visita")
        shoppingChart.forEach((shoppingChartFinal) => {
            console.log(`producto: ${shoppingChartFinal.producto}, unidades: ${shoppingChartFinal.unidades}, Total a pagar por producto: ${shoppingChartFinal.unidades * shoppingChartFinal.precio}`)
        })
        break;
    }
}