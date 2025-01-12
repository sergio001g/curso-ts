function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  descriptor.value = function (...args: any[]) {
    console.log(`Llamando al método ${propertyKey}`)
    return originalMethod.apply(this, args)
  }
  return descriptor
}

class Ejemplo {
  @log
  metodo() {
    console.log("Este es un método de ejemplo")
  }
}

