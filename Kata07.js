// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`let` restricts the scope of the variable to the current block', () => {
  describe('`let` vs. `var`', () => {
    it('`var` works as usual, it`s scope is the function', () => {
      if (true) {
        var varX = true;
      }//broadent the scope
      assert.equal(varX, true);
    });
    it('`let` restricts scope to inside the block', () => {
      if (true) {
        let letX = true;
      }//it wants an error so narrow the scope using let thereby denying the assert to be able to access 'true'
      assert.throws(() => console.log(letX));
    });
  });

  describe('`let` usage', () => {
    it('`let` use in `for` loops', () => {
      let obj = {x: 1};
      for (let key in obj) {}//by using let, we can dynamically change the variable
      assert.throws(() => console.log(key));
    });
    it('create artifical scope, using curly braces', () => {
      {
        var {letx} = true;
      }//wrap variable in curly braces to create the artificial scope and throw error
      assert.throws(() => console.log(letX));
    });
  });
});
