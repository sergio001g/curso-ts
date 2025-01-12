type A = { a: number }
type B = { b: string }

type Union = A | B
type Interseccion = A & B

function procesarUnion(obj: Union) {
  if ("a" in obj) {
    console.log(obj.a)
  } else {
    console.log(obj.b)
  }
}

