var alumnos = [];
alumnos.push({ nombre: "Ana", apellido: "Pineda" });
alumnos.push({ nombre: "Carmen", apellido: "Lopez" });
alumnos.push({ nombre: "Johana", apellido: "Perez" });
alumnos.forEach(function (alumno) {
    console.log(alumno.nombre);
});
