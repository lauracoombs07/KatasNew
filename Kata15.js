// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Assign object property values to new variables while destructuring', () => {
    describe('for simple objects', function() {
      it('use a colon after the property name, like so `propertyName: newName`', () => {
        const {x: y} = {x: 1};//x=y and x=1 so y=1
        assert.equal(y, 1);
      });
      it('assign a new name and give it a default value using `= <default value>`', () => {
        const {x, y=2} = {y: 42};//x: changed to x, to separate the values.
        assert.equal(y, 42);
      });
    });
    describe('for function parameter names', function() {
      it('do it the same way, with a colon behind it', () => {
        const fn = ({x, y=1}) => {//define y = 1 
          assert.equal(y, 1);
        };
        fn({x: 1});
      });
      it('giving it a default value is possible too, like above', () => {
        const fn = ({x: y=3}) => {//default value, but must be defined
          assert.equal(y, 3);
        };
        fn({});
      });
    });
  });
  