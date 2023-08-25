//Código no Block 
//https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#to6cgp

//Versão em JS

var opera_C3_A7_C3_A3o, num1, num2, resultado;

window.alert('OPERAÇÕES: 1: Soma, 2: Subtração, 3: Multiplicação, 4: Divisão e 0: Sair');
opera_C3_A7_C3_A3o = Number(window.prompt('Informe o  numero da operação: '));
while (opera_C3_A7_C3_A3o != 0) {
  num1 = Number(window.prompt('Informe o primeiro número: '));
  num2 = Number(window.prompt('Informe o segundo número: '));
  resultado = 0;
  if (opera_C3_A7_C3_A3o == 1) {
    resultado = num1 + num2;
    window.alert(resultado);
    window.alert('OPERAÇÕES: 1: Soma, 2: Subtração, 3: Multiplicação, 4: Divisão e 0: Sair');
    opera_C3_A7_C3_A3o = Number(window.prompt('Informe o  numero da operação: '));
    resultado = 0;
  } else if (opera_C3_A7_C3_A3o == 2) {
    resultado = num1 - num2;
    window.alert(resultado);
    window.alert('OPERAÇÕES: 1: Soma, 2: Subtração, 3: Multiplicação, 4: Divisão e 0: Sair');
    opera_C3_A7_C3_A3o = Number(window.prompt('Informe o  numero da operação: '));
    resultado = 0;
  } else if (opera_C3_A7_C3_A3o == 3) {
    resultado = num1 * num2;
    window.alert(resultado);
    window.alert('OPERAÇÕES: 1: Soma, 2: Subtração, 3: Multiplicação, 4: Divisão e 0: Sair');
    opera_C3_A7_C3_A3o = Number(window.prompt('Informe o  numero da operação: '));
    resultado = 0;
  } else if (opera_C3_A7_C3_A3o == 4) {
    resultado = num1 / num2;
    window.alert(resultado);
    window.alert('OPERAÇÕES: 1: Soma, 2: Subtração, 3: Multiplicação, 4: Divisão e 0: Sair');
    opera_C3_A7_C3_A3o = Number(window.prompt('Informe o  numero da operação: '));
    resultado = 0;
  }
}
window.alert(resultado);