const prompt = require('prompt-sync')();

let x = 1;
let y = 1;

while (x !== 0 && y !== 0) {
    x = parseFloat(prompt('Digite o valor para x: '));
    y = parseFloat(prompt('Digite o valor para y: '));

    if (x > 0 && y > 0) {
        console.log('Localização: Primeiro quadrante');
    } else if (x < 0 && y > 0) {
        console.log('Localização: Segundo quadrante');
    } else if (x < 0 && y < 0) {
        console.log('Localização: Terceiro quadrante');
    } else if (x > 0 && y < 0) {
        console.log('Localização: Quarto quadrante');
    } else if (x === 0 && y !== 0) {
        console.log('Está no Eixo Y');
    } else if (y === 0 && x !== 0) {
        console.log('Está no Eixo X');
    }
}

console.log('Programa encerrado.');
