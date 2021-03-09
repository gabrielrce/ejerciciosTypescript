function multiplicar(numero1, numero2) {
    var total = numero2 * numero1;
    return total;
}
function promediar(nota1, nota2, nota3) {
    var total = (nota1 + nota2 + nota3) / 3;
    return total;
}
var numeroResultado = 0;
numeroResultado = multiplicar(5, 10);
console.log(numeroResultado);
var promedio = 0;
promedio = promediar(60, 80, 90);
console.log(promedio);
