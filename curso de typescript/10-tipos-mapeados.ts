type Opcional<T> = {
  [P in keyof T]?: T[P]
}

type PersonaOpcional = Opcional<Persona>

