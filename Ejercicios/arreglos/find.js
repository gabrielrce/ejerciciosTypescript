var alumnos = [];
alumnos.push({ alumnoID: 1, nombre: "Ana", apellido: "Pineda" });
alumnos.push({ alumnoID: 2, nombre: "Carmen", apellido: "Lopez" });
alumnos.push({ alumnoID: 3, nombre: "Johana", apellido: "Perez" });
var alumnoEncontrado = alumnos.find(function (alumno) {
    return alumno.alumnoID == 2;
});
console.log(alumnoEncontrado);
