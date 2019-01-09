// 59: Reflect - apply 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.apply` calls a target function', function() {
    it('it is a static method', function() {
      const expectedType = 'function';//reflect.apply is a function
      assert.equal(typeof Reflect.apply, expectedType)
    });
  
    describe('the 1st parameter', () => {
      it('is a callable, e.g. a function', () => {
        let fn = () => 42;//make it a function and the assert wants 42 specifically
        assert.equal(Reflect.apply(fn, void 0, []), 42);
      });
      it('passing it a non-callable throws a TypeError', function() {
        const applyOnUncallable = () =>
          Reflect.apply(() => {}, []);//callable means function or array. not void zero
        assert.throws(applyOnUncallable, TypeError);
      });
    });
  
    describe('the 2nd parameter', () => {
      it('is the scope (or the `this`)', function() {
        class FourtyTwo {
          constructor() { this.value = 42}
          fn() {return this.value}
        }
        let instance = new FourtyTwo();
        const fourtyTwo = Reflect.apply(instance.fn, instance, []);//scope is whatever the new class is.
        assert.deepEqual(fourtyTwo, 42);
      });
    });
  
    describe('the 3rd parameter', () => {
      it('must be an array (or array-like)', () => {
        const thirdParam = [];//looking for an array, made it an array could be empty or not
        assert.doesNotThrow(() => Reflect.apply(() => void 0, null, thirdParam));
      });
      it('is an array of parameters passed to the call', function() {
        let emptyArrayWithFiveElements = Reflect.apply(Array, undefined, [5]);
        assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
      });//it wants 3 parameters passed in
    });
  
    describe('example usages', () => {
      it('simple function call', () => {
        const fn = () => 'the return value';
        assert.equal(Reflect.apply(fn, void 0, []), 'the return value');
      });
      it('call a function on an array', () => {
        const fn = [].slice;//slice is the correct function to call on the array
        assert.deepEqual(Reflect.apply(fn, [0, 23, 42], [1]), [23, 42]);
      });
      it('pass in the `this` that the function to call needs', () => {
        class Bob {
          constructor() { this._name = 'Bob'; }
          name() { return this._name; }
        }
        const bob = new Bob();
        const scope = bob;//we are passing in the lowercase bob because it is in the scope lowercase bob
        assert.equal(Reflect.apply(bob.name, scope, []), 'Bob');
      });
    });
  });
  