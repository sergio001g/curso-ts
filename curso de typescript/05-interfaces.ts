interface Animal {
  nombre: string
  sonido(): string
}

class Perro implements Animal {
  constructor(public nombre: string) {}

  sonido(): string {
    return "Guau"
  }
}

