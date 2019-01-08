// 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators returns an iterable object', function() {
    function* generatorFunction(){
      yield 1;
      yield 2;
    }
    let generator;
    beforeEach(() => {
      generator = generatorFunction();
    });
    it('a generator returns an object', function() {
      const typeOfTheGenerator = 'object';//returns an 'object'
      assert.equal(typeof generator, typeOfTheGenerator);
    });
    it('a generator object has a key `Symbol.iterator`', function() {
      const key = Symbol.iterator;
      assert.equal(key in generator, true);
    });
    it('the `Symbol.iterator` is a function', function() {
      const theType = typeof generator[Symbol.iterator];//in square brackets we get the computed value, the iterable value 
      assert.equal(theType, 'function');
    });
    it('can be looped with `for-of`, which expects an iterable', function() {
      function iterateForOf(){
        for (let value of [Symbol.iterator]) {//key symbol.iterator returns a value. in order of being called gets that iteration
          // no statements needed
        }
      }
      assert.doesNotThrow(iterateForOf);
    });
  });
  