type EsArray<T> = T extends any[] ? true : false
type A = EsArray<number[]>
type B = EsArray<number>

type ElementoDeArray<T> = T extends (infer U)[] ? U : never
type C = ElementoDeArray<string[]>

type NoNulo<T> = T extends null | undefined ? never : T
type D = NoNulo<string | null | undefined>

type Aplanar<T> = T extends Array<infer U> ? Aplanar<U> : T
type E = Aplanar<number[][][]>

type ObtenerRetorno<T> = T extends (...args: any[]) => infer R ? R : never
type F = ObtenerRetorno<() => string>

type EsIgual<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type G = EsIgual<{ a: string; b: number }, { b: number; a: string }>

type ExcluirPorTipo<T, U> = T extends U ? never : T
type H = ExcluirPorTipo<string | number | boolean, boolean>

type DistribuirCondicional<T, U> = T extends U ? T : never
type I = DistribuirCondicional<"a" | "b" | "c", "a" | "d">

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

type ObjetoComplejo = {
  a: string
  b: {
    c: number
    d: boolean[]
  }
}

type J = DeepReadonly<ObjetoComplejo>

