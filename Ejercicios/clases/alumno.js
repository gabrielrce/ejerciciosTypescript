var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    Alumno.prototype.mostrarmensaje = function () {
        console.log("Hola", this.nombre + " ", this.apellido);
    };
    Alumno.prototype.asignar = function (nombreP, apellidoP, pesoP) {
        this.nombre = nombreP;
        this.apellido = apellidoP;
        this.peso = pesoP;
        this.mostrarmensaje();
    };
    return Alumno;
}());
var Alumno1 = new Alumno();
Alumno1.asignar("Juan", "Garmendia", 200);
var Alumno2 = new Alumno();
Alumno2.asignar("Maria", "Lopez", 100);
