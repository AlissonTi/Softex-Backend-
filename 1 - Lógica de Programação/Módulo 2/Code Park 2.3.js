//Código no Block 
//https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#gc92m3

//Versão em JS

var num1, num2, faltas, media;

num1 = Number(window.prompt('Informe a primeira nota: '));
num2 = Number(window.prompt('Informe a segunda nota: '));
faltas = Number(window.prompt('Informe a quantidade de faltas: '));
media = (num1 + num2) / 2;
if (media >= 7) {
  if (faltas <= 3) {
    window.alert('APROVADO ');
  } else {
    window.alert('REPROVADO ');
  }
} else {
  window.alert('REPROVADO ');
}