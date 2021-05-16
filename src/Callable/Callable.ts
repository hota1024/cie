/**
 * Callable interface.
 */
export interface Callable<T extends unknown[], U> {
  (...args: T): U
}

/**
 * Callable class.
 */
export abstract class Callable<T extends unknown[], U> extends Function {
  constructor() {
    super()

    return new Proxy(this, {
      apply(target, _, argArray: T) {
        return target.execute(...argArray)
      },
    })
  }

  abstract execute(...args: T): U
}
