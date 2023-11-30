interface Pato{
    grasnar(): void;
    voar(): void;
  }
  
  interface Galinha{
    cacarejar(): void;
    voarCurtoDistancia(): void;
  }
  
  class PatoSelvagem implements Pato{
    grasnar():void{
      console.log("Pato selvagem: Quack! Quack!");
    }
  
    voar():void{
      console.log("Pato selvagem: Voando como um pato selvagem");
    }
  }
  
  class AdaptadorPato implements Galinha {
    constructor(private pato: Pato) {}
  
    cacarejar(): void {
      this.pato.grasnar();
    }
  
    voarCurtoDistancia(): void {
      this.pato.voar();
    }
  }
  
  const patoSelvagem: Pato = new PatoSelvagem();
  const galinhaAdapter: Galinha = new AdaptadorPato(patoSelvagem);
  
  console.log("Pato Selvagem:");
  patoSelvagem.grasnar();
  patoSelvagem.voar();
  
  console.log("\nGalinha (usando o Adaptador):");
  galinhaAdapter.cacarejar();
  galinhaAdapter.voarCurtoDistancia();
  