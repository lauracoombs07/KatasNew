// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Inside a class`s constructor `super()` can be used", () => {
  it("`extend` a class and use `super()` to call the parent constructor", () => {
    class A {
      constructor() {
        this.levels = 1;
      }
    }
    class B extends A {
      //added extends A to access inheritence
      constructor() {
        super(); //added super() to get parent constructor
        this.levels++;
      }
    }
    assert.equal(new B().levels, 2);
  });
  it("`super()` may also take params", () => {
    class A {
      constructor(startValue = 1, addTo = 1) {
        this.counter = startValue + addTo;
      }
    }
    class B extends A {
      constructor(...args) {
        super(...args); //added ...args to pull parameters from parent
        this.counter++;
      }
    }
    assert.equal(new B(42, 2).counter, 45);
  });
  it("it is important where you place your `super()` call!", () => {
    class A {
      inc() {
        this.countUp = 1;
      }
    }
    class B extends A {
      inc() {
        this.countUp = 2;
        super.inc(); //calling SUPER will over ride any previously set value in child
        return this.countUp;
      }
    }
    assert.equal(new B().inc(), 1);
  });
  it("use `super.constructor` to find out if there is a parent constructor", () => {
    class A {
      constructor() {
        "parent";
      }
    }
    class B extends A {
      constructor() {
        super();
        this.isTop = "class A " + super.constructor;
      } //?
    }
    assert.equal(new B().isTop, 'class A {constructor() {"parent"}}');
  });
});
