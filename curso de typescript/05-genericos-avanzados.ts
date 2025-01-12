class Cola<T> {
  private elementos: T[] = []

  encolar(elemento: T): void {
    this.elementos.push(elemento)
  }

  desencolar(): T | undefined {
    return this.elementos.shift()
  }
}

interface Longitud {
  length: number
}

function logLongitud<T extends Longitud>(arg: T): T {
  console.log(arg.length)
  return arg
}

function crearInstancia<T extends new () => any>(Constructor: T): InstanceType<T> {
  return new Constructor()
}

type ObtenerPropiedades<T> = {
  [K in keyof T]: T[K]
}

type SoloLectura<T> = {
  readonly [K in keyof T]: T[K]
}

type Parcial<T> = {
  [K in keyof T]?: T[K]
}

type Requerido<T> = {
  [K in keyof T]-?: T[K]
}

type Registro<K extends string | number | symbol, T> = {
  [P in K]: T
}

