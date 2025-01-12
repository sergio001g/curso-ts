type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

interface Person {
  name: string
  age: number
  email: string
}

type PersonGetters = Getters<Person>

type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K]
}

type MutablePerson = RemoveReadonly<Readonly<Person>>

type FilterByValueType<T, ValueType> = {
  [K in keyof T as T[K] extends ValueType ? K : never]: T[K]
}

type StringPropsOnly = FilterByValueType<Person, string>

type Proxy<T> = {
  get(): T
  set(value: T): void
}

type Proxyify<T> = {
  [K in keyof T]: Proxy<T[K]>
}

type ProxifiedPerson = Proxyify<Person>

type DeepPartial<T> = T extends object ? {
  [K in keyof T]?: DeepPartial<T[K]>
} : T

type PartialComplex = DeepPartial<ObjetoComplejo>

type DeepRequired<T> = T extends object ? {
  [K in keyof T]-?: DeepRequired<T[K]>
} : T

type RequiredComplex = DeepRequired<PartialComplex>

type PickByType<T, ValueType> = Pick<T, {
  [K in keyof T]: T[K] extends ValueType ? K : never
}[keyof T]>

type NumberProps = PickByType<Person, number>

