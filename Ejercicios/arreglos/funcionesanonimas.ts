interface Alumno{
    nombre: string
    apellido:string
}

var alumnos: Alumno[] =[]

alumnos.push({nombre:"Ana",apellido:"Pineda"})

alumnos.push({nombre:"Carmen",apellido:"Lopez"})

alumnos.push({nombre:"Johana",apellido:"Perez"})

alumnos.forEach((alumno)=>{
console.log(alumno.nombre)

})

