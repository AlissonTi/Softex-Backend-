class Veiculo{
    constructor(modelo, marca, cor, rodas){
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.rodas = rodas;
    }
  
    clone(){
      return new this.constructor(...Object.values(this));
    }
  
    represent(){
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.rodas}`;
    }
  }
  
  class Carro extends Veiculo{
    constructor(modelo, marca, cor, rodas, portas){
      super(modelo, marca, cor, rodas);
      this.portas = portas;
    }
  
    represent(){
      return `${super.represent()}, Portas: ${this.portas}`;
    }
  }
  
  class Moto extends Veiculo{
    constructor(modelo, marca, cor, rodas, tipo){
      super(modelo, marca, cor, rodas);
      this.tipo = tipo;
    }
  
    represent(){
      return `${super.represent()}, Tipo: ${this.tipo}`;
    }
  }
  
  class Aplicacao{
    constructor(){
      this.veiculos = [
        new Carro("Sedan", "Fiat", "Prata", 4, 4),
        new Carro("Hatch", "Chevrolet", "Vermelho", 4, 5),
        new Carro("SUV", "Volkswagen", "Preto", 4, 5),
        new Moto("Esportiva", "Honda", "Branco", 2, "Esportiva"),
        new Moto("Custom", "Harley-Davidson", "Preto", 2, "Custom"),
        new Moto("Scooter", "Yamaha", "Azul", 2, "Scooter"),
      ];
    }
  
    mostrarVeiculos(){
      this.veiculos.forEach((veiculo) => console.log(veiculo.represent()));
    }
  }
  
  const app = new Aplicacao();
  app.mostrarVeiculos();
  