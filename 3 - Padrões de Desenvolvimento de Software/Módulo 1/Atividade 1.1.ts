interface Produto {
    ram: string;
    hdd: string;
    cpu: string;
    type: string;
    toString(): void;
}

class Computador implements Produto {
    constructor(public ram: string, public hdd: string, public cpu: string, public type: string) {}

    toString() {
        console.log(`Ram: ${this.ram}`);
        console.log(`HDD: ${this.hdd}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Type: ${this.type}\n`);
    }
}

class Factory {
    factoryProduto(type: string): Produto | null {
        switch (type) {
            case 'PC':
                return new Computador('8GB', '500GB', '3.90GHz', type);
            case 'SERVER':
                return new Computador('32GB', '750GB', '4.90GHz', type);
            default:
                return null;
        }
    }
}

const factory = new Factory();

let computador1: Produto | null = factory.factoryProduto('PC');
let computador2: Produto | null = factory.factoryProduto('SERVER');

if (computador1) {
    computador1.toString();
} else {
    console.log('Tipo inválido!');
}

if (computador2) {
    computador2.toString();
} else {
    console.log('Tipo inválido!');
}
