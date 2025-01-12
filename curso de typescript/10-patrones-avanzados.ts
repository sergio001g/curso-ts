type Mixin<T extends new (...args: any[]) => any> = InstanceType<T>

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
      )
    })
  })
}

class Disposable {
  isDisposed: boolean = false
  dispose() {
    this.isDisposed = true
  }
}

class Activatable {
  isActive: boolean = false
  activate() {
    this.isActive = true
  }
  deactivate() {
    this.isActive = false
  }
}

class SmartObject implements Mixin<typeof Disposable>, Mixin<typeof Activatable> {
  constructor() {
    applyMixins(SmartObject, [Disposable, Activatable])
  }

  interact() {
    this.activate()
  }

  dispose!: () => void
  isDisposed!: boolean
  isActive!: boolean
  activate!: () => void
  deactivate!: () => void
}

type Constructor<T = {}> = new (...args: any[]) => T

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now()
  }
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false

    activate() {
      this.isActivated = true
    }

    deactivate() {
      this.isActivated = false
    }
  }
}

class User {
  constructor(public name: string) {}
}

const TimestampedUser = Timestamped(User)
const ActivatableUser = Activatable(TimestampedUser)

const user = new ActivatableUser("John")
console.log(user.timestamp)
user.activate()
console.log(user.isActivated)

