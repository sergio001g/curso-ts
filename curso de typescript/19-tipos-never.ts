function error(mensaje: string): never {
  throw new Error(mensaje)
}

function bucleInfinito(): never {
  while (true) {}
}

type Nunca = string & number

