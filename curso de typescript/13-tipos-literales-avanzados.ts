type Direccion = "norte" | "sur" | "este" | "oeste"
let direccionActual: Direccion = "norte"

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

type DiasSemana = "lunes" | "martes" | "miércoles" | "jueves" | "viernes" | "sábado" | "domingo"

type StatusCode = 200 | 404 | 500

const constante = "esto es una constante" as const

type RGB = [red: number, green: number, blue: number]
const color: RGB = [255, 128, 0] as const

type Objeto = {
  readonly prop1: string
  readonly prop2: number
}

type TuplaLiteral = readonly [1, 2, 3]

type AccionUsuario = 
  | { tipo: "LOGIN"; payload: { username: string; password: string } }
  | { tipo: "LOGOUT" }
  | { tipo: "UPDATE_PROFILE"; payload: { name?: string; email?: string } }

function manejarAccion(accion: AccionUsuario) {
  switch (accion.tipo) {
    case "LOGIN":
      console.log(`Iniciando sesión: ${accion.payload.username}`)
      break
    case "LOGOUT":
      console.log("Cerrando sesión")
      break
    case "UPDATE_PROFILE":
      console.log("Actualizando perfil")
      break
  }
}

type Coordenadas = `(${number},${number})`
const punto: Coordenadas = "(10,20)"

type EventName = `on${string}`

type CSSValue = number | `${number}px` | `${number}em` | `${number}%`

type PropiedadCSSConValor = `${string}: ${CSSValue}`

