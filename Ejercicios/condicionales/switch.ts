var cantidadDeNumerosEnviados:number =50;


switch(cantidadDeNumerosEnviados){
    case 25:{
        console.log("Son veinticinco.")
        break;
    }
    case 20:{
        console.log("Son veinte.")
        break;
    }
    case 15:{
        console.log("Son quince.")
        break;
    }
    default:{
        console.log("Ninguna expresion.")
        break;
    }

}

// 1 menu de canciones
// 2 menu de albumes
// 3 menu de perfil
var menu: number=1

switch(menu){
    case 1:{
        console.log("Accede a las Canciones")
        break;
    }

    case 2:{
        console.log("Accede a los Albumes")
        break;
    }

    case 3:{
        console.log("Accede al perfil")
        break;
    }

    default:{
        console.log("El menu no existe")
    }
}