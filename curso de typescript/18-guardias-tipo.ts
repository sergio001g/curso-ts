function esCadena(x: unknown): x is string {
  return typeof x === "string"
}

function procesarEntrada(entrada: unknown) {
  if (esCadena(entrada)) {
    console.log(entrada.toUpperCase())
  } else {
    console.log("La entrada no es una cadena")
  }
}

