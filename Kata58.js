// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
    describe('Reflect is special, it is different to e.g. `Object`', function() {
      it('it`s of type object', function() {
        const expectedType = 'object';//is an 'object'
        assert.equal(typeof Reflect, expectedType);
      });
      it('it can not be instantiated (`new Reflect()`)', function() {//can't create a new one like a class
        const tryToConstruct = () => {  new Reflect; };//have to type it out every time
        assert.throws(tryToConstruct, TypeError);
      });
      it('has no `call` method (as opposed to e.g. Object)', function() {
        const expected = 'undefined';// must be 'undefined'
        assert.equal(typeof Reflect.call, expected);
      });
    });
    
    describe('some `Reflect` usages', function() {
      it('`Reflect.construct()` is like `new ClassName`', function() {
        let Class = () => {};//the first argument taken by reflect, is a function (MDN)
        assert.equal(Reflect.construct(Class, []) instanceof Class, true);
      });
      it('`Reflect.get()` returns a property`s value', function() {
        let obj = {x: 23};//changes value to 23
        assert.equal(Reflect.get(obj, 'x'), 23);
      });
      it('`Reflect.has()` is like `in` just as a function', function() {
        let obj = {x: true};//calling a key 'x' needs a value of 'true'
        assert.equal(Reflect.has(obj, 'x'), true);
      });
    });
  });