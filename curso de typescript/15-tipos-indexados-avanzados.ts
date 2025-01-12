type Persona = {
  nombre: string
  edad: number
  direccion: {
    calle: string
    ciudad: string
    codigoPostal: string
  }
  contacto: {
    email: string
    telefono: string
  }
}

type Direccion = Persona["direccion"]
type Ciudad = Persona["direccion"]["ciudad"]

type ContactInfo = Persona["contacto"]

type PropiedadesPersona = keyof Persona
type PropiedadesDireccion = keyof Persona["direccion"]

type ValoresPersona = Persona[keyof Persona]

type PropiedadOContacto<T extends "nombre" | "edad" | "contacto"> = Persona[T]

function obtenerPropiedad<T extends keyof Persona>(persona: Persona, propiedad: T): Persona[T] {
  return persona[propiedad]
}

type Matrix = number[][]
type ElementoMatrix = Matrix[number][number]

type Tuple = [string, number, boolean]
type SegundoElemento = Tuple[1]

type ObjetoConIndice = {
  [key: string]: number
}

type ValorObjetoConIndice = ObjetoConIndice[string]

type MapeoDeTipos<T> = {
  [K in keyof T]: T[K] extends string ? "es string" : "no es string"
}

type ResultadoMapeo = MapeoDeTipos<Persona>

type DeepKeyof<T> = T extends object
  ? { [K in keyof T]: K extends string ? K | `${K}.${DeepKeyof<T[K]>}` : never }[keyof T]
  : never

type PersonaDeepKeys = DeepKeyof<Persona>

type DeepValue<T, P extends string> = P extends keyof T
  ? T[P]
  : P extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? DeepValue<T[K], R>
    : never
  : never

type EmailType = DeepValue<Persona, "contacto.email">

