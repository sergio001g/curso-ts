interface Persona {
  nombre: string
  edad: number
  email?: string
  saludar(): void
}

type Coordenada = {
  x: number
  y: number
  z?: number
}

interface Empleado extends Persona {
  puesto: string
  salario: number
}

type Punto2D = Coordenada
type Punto3D = Coordenada & { z: number }

let empleado: Empleado = {
  nombre: "Ana García",
  edad: 28,
  puesto: "Desarrolladora",
  salario: 50000,
  saludar() {
    console.log(`Hola, soy ${this.nombre} y trabajo como ${this.puesto}`)
  }
}

let punto: Punto3D = { x: 10, y: 20, z: 30 }

type StringONumero = string | number
let valor: StringONumero = "42"
valor = 42

type Callback = (data: string) => void

