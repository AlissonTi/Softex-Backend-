//Código no Block 
//https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#fe75yf

//Versão em JS

var num1, num2, media;

num1 = Number(window.prompt('Informe o primeiro número: '));
num2 = Number(window.prompt('Informe o segundo número: '));
media = (num1 + num2) / 2;
if (media >= 7) {
  window.alert('APROVADO');
} else {
  window.alert('REPROVADO');
}