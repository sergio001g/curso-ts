abstract class Figura {
  constructor(protected color: string) {}

  abstract calcularArea(): number
  abstract calcularPerimetro(): number

  describir(): string {
    return `Soy una figura de color ${this.color}`
  }
}

class Circulo extends Figura {
  constructor(color: string, private radio: number) {
    super(color)
  }

  calcularArea(): number {
    return Math.PI * this.radio ** 2
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio
  }
}

class Rectangulo extends Figura {
  constructor(color: string, private ancho: number, private alto: number) {
    super(color)
  }

  calcularArea(): number {
    return this.ancho * this.alto
  }

  calcularPerimetro(): number {
    return 2 * (this.ancho + this.alto)
  }
}

let circulo = new Circulo("rojo", 5)
let rectangulo = new Rectangulo("azul", 4, 6)

console.log(circulo.describir())
console.log(`Área del círculo: ${circulo.calcularArea()}`)
console.log(`Perímetro del rectángulo: ${rectangulo.calcularPerimetro()}`)

