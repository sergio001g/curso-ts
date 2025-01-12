function classeDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    nuevoAtributo = "Soy un nuevo atributo"
    saludar() {
      console.log("Hola desde el decorador de clase")
    }
  }
}

function metodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value
  descriptor.value = function(...args: any[]) {
    console.log(`Método ${propertyKey} llamado con argumentos: ${args}`)
    return metodoOriginal.apply(this, args)
  }
  return descriptor
}

function propiedadDecorator(target: any, propertyKey: string) {
  let valor = target[propertyKey]

  const getter = function() {
    console.log(`Obteniendo valor de ${propertyKey}: ${valor}`)
    return valor
  }

  const setter = function(nuevoValor: any) {
    console.log(`Estableciendo valor de ${propertyKey}: ${nuevoValor}`)
    valor = nuevoValor
  }

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  })
}

function parametroDecorator(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`Decorador de parámetro: ${propertyKey}, índice: ${parameterIndex}`)
}

@classeDecorator
class EjemploDecoradores {
  @propiedadDecorator
  propiedad: string = "valor inicial"

  @metodDecorator
  metodo(@parametroDecorator parametro: string) {
    console.log(`Método llamado con: ${parametro}`)
  }
}

const ejemplo = new EjemploDecoradores()
ejemplo.metodo("test")
console.log(ejemplo.propiedad)
ejemplo.propiedad = "nuevo valor"

