// 63: String - `includes()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`string.includes()` determines if a string can be found inside another one', function() {
    describe('finding a single character', function() {
      it('can be done (a character is also a string, in JS)', function() {
        const searchString = 'x';//looking for any of the pieces of the string, but must be in order
        assert.equal('xyz'.includes(searchString), true);
      });
      it('reports false if character was not found', function() {
        const expected = false;//false
        assert.equal('xyz'.includes('abc'), expected);
      });
    });
    describe('find a string', function() {
      it('that matches exactly', function() {
        const findSome = findMe => 'xyz'.includes(findMe);//put param findMe
        assert.equal(findSome('xyz'), true);
      });
    });
    describe('search for an empty string, is always true', function() {
      it('in an empty string', function() {
        const emptyString = '';//there was a space so it wasn't empty
        assert.equal(''.includes(emptyString), true);
      });
      it('in `abc`', function() {
        const actual = 'abc'.includes('');//
        assert.equal(actual, true);
      });
    });
    describe('special/corner cases', function() {//things you wouldn't normally look for lik undefined
      it('search for `undefined` in a string fails', function() {
        const findInAbc = (what) => 'abc'.includes();//add parens function
        assert.equal(findInAbc(undefined), false);
      });
      it('searches are case-sensitive', function() {
        const findInAbc = (what) => 'abc'.includes(what);//spelling
        assert.equal(findInAbc('A'), false);
      });
      it('must NOT be a regular expression', function() {
        const regExp = /n/;//look up regExp on MDN
        assert.throws(() => {''.includes(regExp)});
      });
      describe('coerces the searched "thing" into a string', function() {
        it('e.g. from a number', function() {
          const actual = '123'.includes(3);
          assert.equal(actual, true);
        });
        it('e.g. from an array', function() {
          const actual = '1,2,3'.includes([1,2,3]);//must be an exact macth
          assert.equal(actual, true);
        });
        it('e.g. from an object, with a `toString()` method', function() {
          const objWithToString = {toString: 1}.toString;//toString in object could be bacon {}.toString stringifys the value
          assert.equal('123'.includes(objWithToString), true);
        });
      });
    });
    describe('takes a position from where to start searching', function() {
      it('does not find `a` after position 1 in `abc`', function() {
        const position = 1;//starts searching at index 1 or b but could be any number
        assert.equal('abc'.includes('a', position), false);
      });
      it('even the position gets coerced', function() {
        const findAtPosition = position => 'xyz'.includes('x', position);//anytime it give you a param it probably wants you to use it
        assert.equal(findAtPosition('2'), false);
      });
      describe('invalid positions get converted to 0', function() {
        it('e.g. `undefined`', function() {
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);//remove definition so it sends undifined
          assert.equal(findAtPosition(undefined), true);
        });
        it('negative numbers', function() {
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);//to find the last position, -1. wraps around the back of the array. -2 next to last -3 next to next to last
          assert.equal(findAtPosition(-2), true);//-pos is invalid or 0
        });
        it('NaN', function() {
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);//Nan is invalid gets converted to 0
          assert.equal(findAtPosition(NaN), true);
        });
      });
    });
  });
  