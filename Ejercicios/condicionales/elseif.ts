var cantidadSolicitada: number=15;
if(cantidadSolicitada>15){
    console.log("Aplicamos un descuento grande");
}
else if(cantidadSolicitada>=10 && cantidadSolicitada<=15){
    console.log("Aplicamos un descuento pequeño");
}else{
    console.log("No hay descuento");
}