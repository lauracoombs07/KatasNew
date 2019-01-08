// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', function() {
    const arr = [];//entire array must be empty or next will keep running
    const iterator = arr.values();
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('use `iterator.next()` to drop first value', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();//fill in the blank iterator.next
    iterator.next();//drops first value out of the array so when the assert comes through it only gets the next 2, skips it but doesn't delete from array
    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  it('empty array contains no values', function() {
    const arr = [...[...[...[]]]];//remove the value in the very center array. even the spread 3 dots
    const values = [...arr.values()];
    assert.equal(values.length, 0);
  });
  it('a sparse array without real values has values though', function() {
    const arr = [, ,];//extra comma remove 0 no value but space for it
    const keys = [...arr.values()];
    assert.deepEqual(keys, [void 0, void 0]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a',,'c'];
    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });
});
