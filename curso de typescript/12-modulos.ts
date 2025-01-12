export interface Exportado {
  valor: number
}

export function funcionExportada(): void {
  console.log("Esta función está exportada")
}

export default class ClaseExportadaPorDefecto {
  metodo(): void {
    console.log("Método de la clase exportada por defecto")
  }
}

