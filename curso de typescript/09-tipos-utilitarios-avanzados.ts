type ObjetoComplejo = {
  a: string
  b: number
  c: boolean
  d: {
    e: string[]
    f: {
      g: number
      h: (x: string) => void
    }
  }
}

type SoloLectura = Readonly<ObjetoComplejo>
type Parcial = Partial<ObjetoComplejo>
type Requerido = Required<ObjetoComplejo>
type OmitirBC = Omit<ObjetoComplejo, "b" | "c">
type SeleccionarAD = Pick<ObjetoComplejo, "a" | "d">

type FuncionAString = (x: number) => string
type InvertirFuncion = ReturnType<FuncionAString>

type Parametros = Parameters<(a: string, b: number, c: boolean) => void>

type Constructor = ConstructorParameters<typeof Date>

type Instancia = InstanceType<typeof Date>

type NoNulo = NonNullable<string | number | null | undefined>

type Excluir = Exclude<"a" | "b" | "c", "a" | "d">
type Extraer = Extract<"a" | "b" | "c", "a" | "d">

type ObtenerRetorno<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never

type MiTipo = { a: number, b: string, c: boolean }
type ClavesDeMiTipo = keyof MiTipo

type ValoresDeMiTipo = MiTipo[keyof MiTipo]

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P]
}

type Flatten<T> = T extends Array<infer U> ? U : T

