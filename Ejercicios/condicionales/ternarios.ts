var nombre: string;
var edad: number=15;

if(edad>10){
    nombre="Juan"
}

console.log(nombre)
//Para reemplzar todo ese if//valor verdadero//vlor falso
nombre = edad > 10 ? "Juan de Ternario" : "No se cumplio"
console.log(nombre)