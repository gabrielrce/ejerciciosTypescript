function multiplicar(numero1:number,numero2:number):number{
var total=numero2*numero1;
    return total;
}

function promediar(nota1:number, nota2:number, nota3:number):number{
    var total= (nota1+nota2+nota3)/3;
    return total;
}

var numeroResultado: number = 0;
numeroResultado=multiplicar(5,10);

console.log(numeroResultado);

var promedio: number = 0;
promedio=promediar(60,80,90);

console.log(promedio);

