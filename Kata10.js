// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    let [firstValue] = [1];
    assert.strictEqual(firstValue, 1);
  });
  it('get the last item from array', () => {
    let [,,lastValue] = [1, 2, 3];//[,,]skips to certain index
    assert.strictEqual(lastValue, 3);
  });
  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    [x, y] = [y, x];//[x, y] = not necessarity equal to, but assigned to. so switch x and the y
    assert.deepEqual([x, y], ['why', 'ax']);
  });
  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    const [,,z] = all;
    assert.equal(z, 'zet');
  });
  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    const [[firstName, surname], age] = user;//consistent nested arrays
    const expected = 'Some One = 23 years';
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });
  it('chained assignments', () => {
    let c, d;
    let [a, b] = [c, d] = [1, 2];//put a and b in array. must both be in arrays to chain assignment
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });
  it('in for-of loop', () => {
    for (var [,a, b] of [[0, 1, 2]]) {}
    assert.deepEqual([a, b], [1, 2]);
  });
});
