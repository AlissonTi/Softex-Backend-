class SistemaSeguranca{
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senhaSuperSecreta";

  private constructor(){}

  public static getInstance(): SistemaSeguranca{
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void{
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido a base secreta");
    } else {
      console.log("Acesso negado a base secreta");
    }
  }
}
const sistemaSeguranca = SistemaSeguranca.getInstance();

sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); 
sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta"); 
