interface Usuario{
    nombre:string;
    apellido:string;
}

var listadoDeUsuarios: Array<Usuario>=[
    {
        nombre:'Ana',
        apellido:'Carcamo'
    },
    {
        nombre:'Lupita',
        apellido:'Juarez'
    },
    {
        nombre:'Elmer',
        apellido:'Martinez'
    }
]

// for(let cantidadRepetir:number=0; cantidadRepetir<listadoDeUsuarios.length; cantidadRepetir++){
//     console.log(listadoDeUsuarios[cantidadRepetir].nombre);
// }

for(let Usuario of listadoDeUsuarios){
    console.log(Usuario.apellido);
}

