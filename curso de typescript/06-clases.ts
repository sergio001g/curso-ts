class Vehiculo {
  protected marca: string

  constructor(marca: string) {
    this.marca = marca
  }

  describir(): string {
    return `Este vehículo es de marca ${this.marca}`
  }
}

class Coche extends Vehiculo {
  private modelo: string

  constructor(marca: string, modelo: string) {
    super(marca)
    this.modelo = modelo
  }

  describir(): string {
    return `${super.describir()} y es un ${this.modelo}`
  }
}

