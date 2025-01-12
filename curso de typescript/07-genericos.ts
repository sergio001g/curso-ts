function identidad<T>(arg: T): T {
  return arg
}

class Contenedor<T> {
  private valor: T

  constructor(valor: T) {
    this.valor = valor
  }

  obtener(): T {
    return this.valor
  }
}

