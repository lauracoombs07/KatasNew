// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Default parameters make function parameters more flexible', () => {
    it('define it using an assignment to the parameter `function(param=1){}`', function() {
      const number = (int=0) => int;//giving int a defaut parameter of 0 
      assert.equal(number(), 0);
    });
    it('it is used when `undefined` is passed', function() {
      let number = (int = 23) => int;
      const param = undefined;//by passing 'undefined', it uses default value
      assert.equal(number(param), 23);
    });
    it('it is not used when a value is given', function() {
      function xhr(method) {//define method in the params
        return method;  
      }
      assert.equal(xhr('POST'), 'POST');//'POST' Overrides the parameter
    });
    it('it is evaluated at run time', function() {
      let defaultValue = 42;//set defaultValue = to 42
      function xhr(method = `value: ${defaultValue}`) {
        return method;  
      }
      assert.equal(xhr(), 'value: 42');
    });
    it('it can also be a function', function() {
      const defaultValue =  () => 'defaultValue';//needs to be a function set to string 'defaultValue'
      function fn(value = defaultValue()) {
        return value;  
      }
      assert.equal(fn(), 'defaultValue');
    });
  });
  