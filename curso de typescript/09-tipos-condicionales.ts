type EsString<T> = T extends string ? true : false
type A = EsString<string>
type B = EsString<number>

