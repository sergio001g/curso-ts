type Interseccion = { a: number } & { b: string }
let objetoInterseccion: Interseccion = { a: 1, b: "texto" }

type Union = string | number
function procesarUnion(valor: Union) {
  if (typeof valor === "string") {
    return valor.toUpperCase()
  } else {
    return valor.toFixed(2)
  }
}

type ExtraerValor<T> = T extends Promise<infer U> ? U : T
type ValorExtraido = ExtraerValor<Promise<string>>

type PropiedadesNoNulas<T> = {
  [K in keyof T]: Exclude<T[K], null | undefined>
}

type ObjetoConMetodos = {
  [key: string]: Function
}

type TuplaNumerica = [number, ...number[], number]

type Aplanar<T> = T extends Array<infer U> ? U : T

type ClavesDe<T> = keyof T

type ValoresDe<T> = T[keyof T]

type FuncionAR<A extends any[], R> = (...args: A) => R

type Omitir<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
}

