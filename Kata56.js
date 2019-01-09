// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a function to a generator', () => {
    it('the generator can receive a function as a value', function() {
      let fn = function() {};
      function* generatorFunction(fn) {//bringing the function into the parameter. Generators can pass things in and out.
        assert.equal(yield null, fn); // remember, don't touch this line
      }
      let iterator = generatorFunction();
      iterator.next();
      iterator.next();
    });
    it('pass a function to the iterator, which calls it', function() {
      let fn = () => 2 //wrote a function. The assert asks for 2
      function* generatorFunction() {
        yield (yield 1)();
      }
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next(fn).value];//1st iterator yields 1, next hits (fn)
      assert.deepEqual([1, 2], iteratedOver);
    });
    it('nesting yielded function calls', function() {
      let fn = () => 2//write a function
      function* generatorFunction() {
        yield (yield (yield 1)());//for some reason 2 needs to be fed in by a function but three needs to be put in the iterator.next
      }//the nesting yields set up the iterator.next
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next(fn).value, iterator.next(3).value];
      assert.deepEqual([1, 2, 3], iteratedOver);
    });
  });
  
  