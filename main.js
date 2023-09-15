//Simulador de costos de productos comprados 
//primero se establece que productos se van a comprar 
//luego se establece el metodo de pago.tenemos 2 opciones
//1-contado
//2-cuotas(hasta 12 cuotas).hasta 3 cuotas son sin interes
//desde la 4 es un 8% de interes por cuota agregada
//quedando en 6 cuotas 48% de interes y en 12 cuotas 96%de interes.


//definicion de variables.En el array de objetos estalezco el nombre del producto
// junto con su respectivo precio, sumado a su posicion en id.
const productos = [{id:1,producto:"zapatillas",precio:20000},{id:2,producto:"zapatos",precio:18000},{id:3,producto:"pantalones",precio:12000},{
   id:4, producto:"remera",precio:9000},{id:5,producto:"camisa",precio:9500}];
let seleccion=3;
let PagoContado=0;


//funcion para visualizar los productos que vende el local
function Agregar(){
    let ProductoAgregado=" ";
    let PrecioAgregado=0;
    let cantidad=0;
    console.log("Nombre del producto:");
    ProductoAgregado=prompt();
    console.log("Precio del producto");
    PrecioAgregado=parseInt(prompt());
    cantidad=productos.length;
    productos.push({id:cantidad+1,producto:ProductoAgregado,precio:PrecioAgregado});
    return;
}
//funcion simulacion de costos de todos los productos comprados
//de acuerdo al metodo depago...
function MetodoPago(CostoContado){
    let indicador=0;
    let NumCuotas=2;
    let CuotaMensual=0;
    console.log("COMO PAGARAS:");
    console.log("1-Contado");
    console.log("2-Credito");
    indicador=prompt("Seleccionar:");
    if(indicador==1){
        console.log("DEBERAS PAGAR:",CostoContado,"AL CONTADO");
    }else if(indicador==2){
        console.log("Cuantas Cuotas:(2-12)");      //8% de interes por cuota...
        NumCuotas=prompt();
        if(NumCuotas<=3){
//La cuota aca seria sin interes...            
            CuotaMensual=CostoContado/NumCuotas;
            console.log("LA CUOTA MENSUAL SERIA:" + CuotaMensual);
        }else{
//las cuotas tendran un 8% de interes...
            CuotaMensual=((8/100*NumCuotas*CostoContado)+CostoContado)/NumCuotas;
            console.log("LA CUOTA MENSUAL SERIA:" + CuotaMensual);
            console.log("CON UN INTERES DE %" + 8*NumCuotas);
        }
    }
    return;
}


//funcion seleccion de productos a comprar...
//en esta funcion se calcula el precio al contado total a pagar
function calculo(){
    let indicador=6;
    let calculo=0;
    while(indicador!=0){
        console.log("QUE PRODUCTOS COMPRARAS:");
        console.log("0-salir");
        let contador=1;
        for(const aux of productos){
            console.log(contador+ "-"+aux.producto+"($"+aux.precio+")");
            contador+=1;
        }
        indicador=parseInt( prompt("seleccionar:") );
        for(const aux of productos){
            if(aux.id==indicador){
               calculo+=aux.precio;
            }
        }
        console.log(calculo);
    }
    return calculo;
}

//programa principal
do{
    console.log("QUE DESEAS REALIZAR:");
    console.log("0-finalizar");
    console.log("1-escoger productos a comprar");
    console.log("2-calcular costo");
    console.log("3-agregar nuevos productos");
    seleccion=prompt();
    if(seleccion==1){
        PagoContado=calculo();
    }
    else if(seleccion==2){
        MetodoPago(PagoContado);
    }
    else if(seleccion==3){
        Agregar();
    }
    else if(seleccion==4){
       productos.forEach((element) => console.log(element.precio));
    }
    
}while(seleccion!=0)
