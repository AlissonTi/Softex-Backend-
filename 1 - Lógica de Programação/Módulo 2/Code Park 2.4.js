//Código no Block 
//https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#j5ifdr

//Versão em JS

var rodas, peso, pessoas;

rodas = Number(window.prompt('Informe a quantidade de rodas: '));
peso = Number(window.prompt('Informe o peso: '));
pessoas = Number(window.prompt('Informe a quantidade de pessoas: '));
if (rodas == 2 || rodas == 3) {
  window.alert('Categoria A');
} else if (rodas == 4 && pessoas <= 8 && peso <= 3500) {
  window.alert('Categoria B');
} else if (rodas >= 4 && peso > 3500 && peso <= 6000) {
  window.alert('Categoria C');
} else if (rodas >= 4 && pessoas > 8) {
  window.alert('Categoria D');
} else if (rodas >= 4 && peso > 6000) {
  window.alert('Categoria E');
} else
  window.alert('Veículo inválido');