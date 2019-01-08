// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', function() {
    it('returns key+value for each element', function() {
      const arr = ['a', 'b', 'c'];
      const entriesAsArray = Array.from(arr.entries());
      assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
    });
    it('empty elements contain the value `undefined`', function() {
      const arr = ['one'];
      arr[2] = 'three';
      const secondValue = Array.from(arr.entries())[1];//need to call the empty array value, why does it hang out after the function
      assert.deepEqual(secondValue, [1, void 0]);
    });
    describe('returns an iterable', function() {
      it('has `next()` to iterate', function() {
        const arr = ['one'];//create array array has one in it
        // const [value] = Array.from(arr.entries());//wrap in array.from give an object, and by destructuring (sq brackets around value) to return an array
        const value = arr.entries().next().value;//This is what they want. This is accessing a property.
        assert.deepEqual(value, [0, 'one']);
      });
    });
  });
  