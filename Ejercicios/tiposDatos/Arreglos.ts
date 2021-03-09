interface Alumnos{
    nombre:string,
    edad:number
}


var listadoNombres: Array<string>=["Juana","Maria","Ana","Carmen"];
console.log(listadoNombres[0]);

var listadoNumeros: Array<Number>=[15,25,36,695,95];
console.log(listadoNumeros[3]);

var listadoAlumnos: Array<Alumnos>=[{
    nombre:"Maria",
    edad:15
},
{
    nombre: "Ana",
    edad: 95
},
{
    nombre:"Johanna",
    edad:15
}
]

console.log(listadoAlumnos[2]);
console.log(listadoAlumnos[2].nombre);

