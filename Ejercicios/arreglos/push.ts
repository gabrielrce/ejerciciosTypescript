// var nombres:string[]=["ana","maria","juana"];
// nombres.push("carlos")
// console.log(nombres);

interface alumno{
    nombre:string;
    apellido:string;

}

var alumnos:alumno[]=[];
alumnos.push({nombre:"Ana",apellido:"Lopez"});

console.log(alumnos);