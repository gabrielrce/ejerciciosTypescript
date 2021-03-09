class Alumno{
   private  nombre: string;
    private apellido: string;
    private peso: number;

   private  mostrarmensaje(){
        console.log("Hola", this.nombre+" ",this.apellido);
    }

    asignar(nombreP:string, apellidoP:string, pesoP:number){
        this.nombre=nombreP;
        this.apellido=apellidoP;
        this.peso=pesoP;
        this.mostrarmensaje();

    }
    
}
var Alumno1: Alumno= new Alumno();
Alumno1.asignar("Juan","Garmendia",200);


var Alumno2: Alumno= new Alumno();
Alumno2.asignar("Maria","Lopez",100);
