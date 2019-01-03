 inlineFunc: () => 'I am inline'// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The object literal allows for new shorthands', () => {
  const x = 1;
  const y = 2;
  describe('with variables', () => {
    it('the short version for `{x: x}` is {x}', () => {
      const short = {y};//use the y const instead of x and {y} is the shorthand of {y: y}
      assert.deepEqual(short, {y: y});
    });
    it('works with multiple variables too', () => {
      const short = {x, y};
      assert.deepEqual(short, {x: x, y: y});
    });
  });
  describe('with methods', () => {
    const func = () => func;
    it('using the name only uses it as key', () => {
      const short = {func};//func is the key and it is returning a function
      assert.deepEqual(short, {func: func});
    });
    it('a different key must be given explicitly, just like before ES6', () => {
      const short = {otherKey: func}; //specify the value for otherKey and set value to func. OtherKey was not previously defined
      assert.deepEqual(short, {otherKey: func});
    });
    it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
      const short = {
        inlineFunc: () =>'I am inline'
      };//inlineFunc is the KeyValue
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });
});
