interface Sanduiche{
    custo(): number;
    descricao(): string;
  }
  
  class SanduicheBase implements Sanduiche{
    custo(): number {
      return 4.5;
    }
  
    descricao(): string {
      return "Sanduíche de Frango Assado";
    }
  }
  
  abstract class Decorator implements Sanduiche {
    protected sanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    abstract custo(): number;
    abstract descricao(): string;
  }
  
  class PepperoniDecorator extends Decorator {
    custo(): number {
      return this.sanduiche.custo() + 0.99;
    }
  
    descricao(): string {
      return `${this.sanduiche.descricao()}, Pepperoni`;
    }
  }
  
  class QueijoMussarelaRaladoDecorator extends Decorator {
    custo(): number {
      return this.sanduiche.custo() + 2.0;
    }
  
    descricao(): string {
      return `${this.sanduiche.descricao()}, Queijo Mussarela Ralado`;
    }
  }
  
  let sanduiche: Sanduiche = new SanduicheBase();
  sanduiche = new PepperoniDecorator(sanduiche);
  sanduiche = new QueijoMussarelaRaladoDecorator(sanduiche);
  
  console.log(`${sanduiche.descricao()} custa $${sanduiche.custo().toFixed(2)}`);
  