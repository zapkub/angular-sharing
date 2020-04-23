/**
 * FROM ANOTHER FILE
 */

export class ServiceA {
  getCartItems(): string {
    throw new Error();
  }
}

export class ServiceB {
  getUserInfo(): number {
    throw new Error();
  }

  getSomethingElse() {
  }
}

/**
 * FROM FACADE FILE
 */

export class FacadePatternFacade {
  constructor(private a: ServiceA, private b: ServiceB) {
  }

  getUserInfo(): number {
    return this.b.getUserInfo();
  }

  getCartItems(): string {
    return this.a.getCartItems();
  }

}
