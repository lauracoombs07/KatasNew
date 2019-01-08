// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generator - `yield` is used to pause and resume a generator function', () => {
    function* generatorFunction() {
      yield 'hello';
      yield 'world';
    }
    let generator;
  
    beforeEach(function() {
      generator = generatorFunction();
    });
    it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
      let values = Array.from(generatorFunction());//generationFunction is a function and has to be called()
      assert.deepEqual(values, ['hello', 'world']);
    });
    describe('after the first `generator.next()` call', function() {
      it('the value is "hello"', function() {
        const {value} = generator.next();//.next is a function
        assert.equal(value, 'hello');
      });
      it('and `done` is false', function() {
        const {done} = generator.next();//run .next because there are more items in the array
        assert.equal(done, false);
      });
    });
    describe('after the second `next()` call', function() {
      let secondItem;
      beforeEach(function() {
        generator.next()//by calling it on the function and not assigning it, it skips the first item and moves to the second item
        secondItem = generator.next();
      });
      it('`value` is "world"', function() {
        let {value} = secondItem;
        assert.equal(value, 'world');
      });
      it('and `done` is still false', function() {
        const {done} = secondItem;//destructure {} around done like in line 25 
        assert.equal(done, false);
      });
    });
    describe('after stepping past the last element, calling `next()` that often', function() {
      it('`done` property equals true, since there is nothing more to iterator over', function() {
        generator.next();
        generator.next();
        let {done} = generator.next();//third generator.next = done. destructure {done}
        assert.equal(done, true);
      });
    });
  });
  
  