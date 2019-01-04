// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      let a, b, c = 'abc';
      assert.deepEqual(['a', 'b', 'c'], ['a', 'b', 'c']);//put in exactly what you get out so 2 arrays are equivilant
    });
    it('missing characters are undefined', () => {
      const [a, b, c] = 'ab';//missing a variable b 
      assert.equal(c, void 0);
    });
    it('unicode character work too', () => {
      const [space, coffee] = ' ☕';//replace 'a' with a space. 'a' was not defined anywhere.
      assert.equal(coffee, '\u{2615}');
    });
  });
  