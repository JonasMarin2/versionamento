export default class cone{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }

    calculargeratriz(){
        return Math.sqrt((this.raio*this.raio)+(this.altura *  this.altura))
    }

    calcularvolume(){
        return (Math.PI * this.raio * this.raio * this.altura) / 3
    }

    calcularareatotal(){
        return ((Math.PI * this.raio * this.raio)+
                (Math.PI*this.raio*this.calculargeratriz()))
    }
}