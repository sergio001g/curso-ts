type MiTipo = {
  a: string
  b: number
  c: boolean
}

type SoloLectura = Readonly<MiTipo>
type Parcial = Partial<MiTipo>
type Requerido = Required<MiTipo>
type SinC = Omit<MiTipo, "c">
type SoloAB = Pick<MiTipo, "a" | "b">

