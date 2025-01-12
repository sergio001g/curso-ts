type Persona = {
  nombre: string
  edad: number
  direccion: {
    calle: string
    ciudad: string
  }
}

type Direccion = Persona["direccion"]
type Ciudad = Persona["direccion"]["ciudad"]

