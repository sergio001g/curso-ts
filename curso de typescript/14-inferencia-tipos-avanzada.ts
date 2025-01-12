let inferido = "esto es una cadena"
let arregloInferido = [1, 2, 3]

function inferirRetorno(a: number, b: number) {
  return a + b
}

let resultado = inferirRetorno(5, 3)

const objetoInferido = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    numero: 123
  }
}

type InferirObjeto = typeof objetoInferido

function crearPersona(nombre: string, edad: number) {
  return { nombre, edad, saludar() { console.log(`Hola, soy ${nombre}`) } }
}

let persona = crearPersona("Ana", 25)

type Persona = ReturnType<typeof crearPersona>

function procesarDatos<T extends { id: number }>(datos: T[]) {
  return datos.map(item => ({ ...item, procesado: true }))
}

let datosOriginales = [{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }]
let datosProcesados = procesarDatos(datosOriginales)

type DatosProcesados = typeof datosProcesados[number]

async function obtenerDatos() {
  const respuesta = await fetch("https://api.ejemplo.com/datos")
  return await respuesta.json()
}

type DatosAPI = Awaited<ReturnType<typeof obtenerDatos>>

const tupla = [10, "hola", true] as const
type TuplaInferida = typeof tupla

function unirObjetos<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

const objetoUnido = unirObjetos({ a: 1 }, { b: "texto" })
type ObjetoUnido = typeof objetoUnido

type PropiedadesDeClase<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]

class Ejemplo {
  propiedad1: string = ""
  propiedad2: number = 0
  metodo() {}
}

type PropiedadesEjemplo = PropiedadesDeClase<Ejemplo>

