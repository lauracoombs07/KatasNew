// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class use `super` to access parent methods', () => {
    it('use of `super` without `extends` fails (already when transpiling)', () => {
      class A {hasSuper() { return false; }} //replaced super with false
      //cannot use super without inheritance(extends)
      assert.equal(new A().hasSuper(), false);
    });
    it('`super` with `extends` calls the method of the given name of the parent class', () => {
      class A {hasSuper() { return true }}
      class B extends A {hasSuper() { return super.hasSuper(); }}//added () to hasSuper, had to call a function properly
      assert.equal(new B().hasSuper(), true);
    });
    it('when overridden a method does NOT automatically call its super method', () => {
      class A {hasSuper() { return true; }}
      class B extends A {hasSuper() { return undefined; }}//inheritence is invoked, but overridden in function
      assert.equal(new B().hasSuper(), void 0); //changes within scope will override inheritance
    });
    it('`super` works across any number of levels of inheritance', () => {
      class A {iAmSuper() { return true; }}
      class B extends A {}
      class C extends B {iAmSuper() { return super.iAmSuper(); }} //added super to this line, it pulled value through two levels of inheritance
      assert.equal(new C().iAmSuper(), true);
    });
    it('accessing an undefined member of the parent class returns `undefined`', () => {
      class A {getMethod(){}} //getMethod is undefined
      class B extends A {getMethod() { return super.getMethod(); }}//undefined is inherited along with the function call
      assert.equal(new B().getMethod(), void 0);
    });
  });