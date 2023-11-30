import * as readlineSync from 'readline-sync';

interface OperacaoStrategy{
  execute(a: number, b: number): number;
}

class Soma implements OperacaoStrategy{
  execute(a: number, b: number):number{
    return a + b;
  }
}

class Subtracao implements OperacaoStrategy{
  execute(a: number, b: number):number{
    return a - b;
  }
}

class Multiplicacao implements OperacaoStrategy{
  execute(a: number, b: number):number{
    return a * b;
  }
}

class Calculadora{
  private operacao: OperacaoStrategy | null = null;

  setOperacao(operacao: OperacaoStrategy):void{
    this.operacao = operacao;
  }

  calcular(a: number, b: number): number{
    if (this.operacao) {
      return this.operacao.execute(a, b);
    } else {
      throw new Error("Operação não definida. Defina uma operação antes de calcular.");
    }
  }
}

const calculadora = new Calculadora();

const a = parseInt(readlineSync.question("Digite o primeiro valor: ")) || 0;
const b = parseInt(readlineSync.question("Digite o segundo valor: ")) || 0;
const operacaoSelecionada = readlineSync.question("Digite a operacao (+ para soma, - para subtracao, * para multiplicacao): ");

let operacao: OperacaoStrategy;

switch(operacaoSelecionada){
  case "+":
    operacao = new Soma();
    break;
  case "-":
    operacao = new Subtracao();
    break;
  case "*":
    operacao = new Multiplicacao();
    break;
  default:
    throw new Error("Operação inválida.");
}

calculadora.setOperacao(operacao);
const resultado = calculadora.calcular(a, b);

console.log(`Resultado da operação: ${resultado}`);
