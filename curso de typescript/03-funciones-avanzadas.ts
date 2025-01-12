function sumar(a: number, b: number): number {
  return a + b
}

const restar = (a: number, b: number): number => a - b

function multiplicar(a: number, b: number, c: number = 1): number {
  return a * b * c
}

function concatenar(...strings: string[]): string {
  return strings.join(" ")
}

type OperacionMatematica = (x: number, y: number) => number

function ejecutarOperacion(func: OperacionMatematica, a: number, b: number): number {
  return func(a, b)
}

function crearSaludo(nombre: string): (tiempo: string) => string {
  return function(tiempo: string): string {
    return `Buenos ${tiempo}, ${nombre}!`
  }
}

const saludarAna = crearSaludo("Ana")
console.log(saludarAna("días"))

function procesarDatos<T>(datos: T[]): T[] {
  return datos.reverse()
}

