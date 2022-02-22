class Rectangulo{
    constructor(alto , ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        console.log(`El area del rectangulo es ${this.alto * this.ancho}`);
    }
}
class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado,lado);
        this.lado = lado;
    }
    area(){
        console.log(`El area del cuadrado es ${this.lado * this.lado}`)
    }

    static funcionEstatica(){
        console.log('Funcion Estatica')
    }
}



const rectangulox = new Rectangulo(2,3);
rectangulox.area();

const cuadradox = new Cuadrado(5);
cuadradox.area();

Cuadrado.funcionEstatica();
