interface Alumno{
    alumnoID: number;
    nombre: string;
    apellido:string;
}

var alumnos: Alumno[] =[]

alumnos.push({alumnoID: 1,nombre:"Ana",apellido:"Pineda"})
alumnos.push({alumnoID: 2,nombre:"Carmen",apellido:"Lopez"})
alumnos.push({alumnoID: 3,nombre:"Johana",apellido:"Perez"})

var alumnoEncontrado= alumnos.find((alumno)=>{
    return alumno.alumnoID==3
})

console.log(alumnoEncontrado)