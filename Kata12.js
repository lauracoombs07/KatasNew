// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    const {x} = {x: 1};
    assert.equal(x, 1);
  });
  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {magic: second} = {magic: 42};//equivilent on both sides
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z:[,x]} = {z: [23, 42]}; //leading comma helps us access 42
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [,[{env,lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      assert.equal(lang, 'ES6');//equivilant on both sides
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, };//removed z so it is 'missing'
      assert.equal(z, void 0);
    });
    it('destructure from builtins (string)', () => {
      const {substr} = '1';//1 must be a string
      assert.equal(substr, String.prototype.substr);
    });
  });
});
