export interface Exportable {
  id: number
  nombre: string
}

export function funcionExportada(param: string): void {
  console.log(`Función exportada llamada con: ${param}`)
}

export default class ClaseExportadaPorDefecto {
  constructor(public valor: number) {}

  metodo(): void {
    console.log(`Método de la clase exportada por defecto: ${this.valor}`)
  }
}

export * from "./otro-modulo"

export { OtraClase as ClaseRenombrada } from "./otro-modulo"

namespace EspacioDeNombres {
  export interface InterfazInterna {
    propiedad: string
  }

  export class ClaseInterna implements InterfazInterna {
    constructor(public propiedad: string) {}
  }

  export function funcionInterna(): void {
    console.log("Función dentro del espacio de nombres")
  }

  export namespace SubEspacio {
    export const constante = 42
  }
}

let objetoInterno: EspacioDeNombres.InterfazInterna = new EspacioDeNombres.ClaseInterna("valor")
EspacioDeNombres.funcionInterna()
console.log(EspacioDeNombres.SubEspacio.constante)

