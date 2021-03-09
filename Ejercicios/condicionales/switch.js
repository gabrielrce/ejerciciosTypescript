var cantidadDeNumerosEnviados = 50;
switch (cantidadDeNumerosEnviados) {
    case 25: {
        console.log("Son veinticinco.");
        break;
    }
    case 20: {
        console.log("Son veinte.");
        break;
    }
    case 15: {
        console.log("Son quince.");
        break;
    }
    default: {
        console.log("Ninguna expresion.");
        break;
    }
}
// 1 menu de canciones
// 2 menu de albumes
// 3 menu de perfil
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albums"] = 2] = "albums";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
var menu = 1;
switch (menu) {
    case tipoMenu.canciones: {
        console.log("Accede a las Canciones");
        break;
    }
    case tipoMenu.albums: {
        console.log("Accede a los Albumes");
        break;
    }
    case tipoMenu.perfil: {
        console.log("Accede al perfil");
        break;
    }
    default: {
        console.log("El menu no existe");
    }
}
