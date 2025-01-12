let cadena: string = "Esto es una cadena de texto"
let numero: number = 42.5
let booleano: boolean = false
let indefinido: undefined = undefined
let nulo: null = null
let simbolo: symbol = Symbol("identificador-unico")
let granEntero: bigint = 9007199254740991n

let arregloNumeros: number[] = [1, 2, 3, 4, 5]
let arregloCadenas: Array<string> = ["TypeScript", "es", "genial"]

let tupla: [string, number, boolean] = ["coordenada", 10, true]

let cualquiera: any = "Esto puede ser cualquier cosa"
let desconocido: unknown = 4

function imprimirValor(x: unknown): void {
  if (typeof x === "string") {
    console.log(x.toUpperCase())
  } else if (typeof x === "number") {
    console.log(x.toFixed(2))
  }
}

let nunca: never
function lanzarError(mensaje: string): never {
  throw new Error(mensaje)
}

