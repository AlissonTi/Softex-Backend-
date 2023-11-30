import * as readlineSync from 'readline-sync';

class Evento{
    private observadores: ((evento: string, dados: any) => void)[] = [];
  
    adicionarObservador(observador: (evento: string, dados: any) => void): void {
      this.observadores.push(observador);
    }
  
    notificar(evento: string, dados: any): void{
      this.observadores.forEach((observador) =>{
        observador(evento, dados);
      });
    }
  }
  
  class Editor {
    private evento: Evento = new Evento();
  
    adicionarObservador(observador: (evento: string, dados: any) => void): void {
      this.evento.adicionarObservador(observador);
    }
  
    abrir(): void {
      console.log("Editor aberto");
      this.evento.notificar("open", null);
    }
  
    salvar(): void {
      console.log("Conteúdo salvo");
      this.evento.notificar("save", null);
    }
  }

  class TextEditor extends Editor {
    private linhas: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      this.linhas.splice(lineNumber - 1, 0, text);
    }
  
    removeLine(lineNumber: number): void {
      this.linhas.splice(lineNumber - 1, 1);
    }
  
    getLines(): string[] {
      return this.linhas;
    }
  }
  
    const textEditor = new TextEditor();

    textEditor.adicionarObservador((evento, dados) => {
    if (evento === "open") {
        console.log("Editor de texto aberto. Insira as linhas de texto (Digite 'EOF' para encerrar):");
        let lineNumber = 1;
        while (true) {
        const input = readlineSync.question(`Linha ${lineNumber}: `);
        if (input === "EOF") {
            break;
        }
        textEditor.insertLine(lineNumber, input);
        lineNumber++;
        }
        textEditor.salvar();
    } else if (evento === "save") {
        console.log("\nConteúdo do arquivo:");
        const lines = textEditor.getLines();
        lines.forEach((line, index) => {
        console.log(`Linha ${index + 1}: ${line}`);
        });
    }
    });

    textEditor.abrir();