// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring function parameters', () => {
    describe('destruct parameters', () => {
      it('multiple params from object', () => {
        const fn = ({id=42, name='Wolfram'}) => {//params must be defined in single object
          assert.equal(id, 42);
          assert.equal(name, 'Wolfram');
        };
        const user = {name: 'Wolfram', id: 42};
        fn(user);
      });
      it('multiple params from array/object', () => {
        const fn = ([{name}]) => {
          assert.equal(name, 'Alice');
        };
        const users = [{name: 'Alice', id: 42}];//pulls first name param. removed conflicting param
        fn(users);
      });
    });
    describe('default values', () => {
      it('for simple values', () => {
        const fn = (id, name='Bob') => {
          assert.strictEqual(id, 23);
          assert.strictEqual(name, 'Bob');//when name is defined, must be 
        };
        fn(23);
      });
      it('for a missing array value', () => {
        const defaultUser = {id: 23, name: 'Joe'};
        const fn = ([user, defaultUser]) => {//defined defaultUser
          assert.deepEqual(user, defaultUser);
        };
        fn([]);
      });
      it('mix of parameter types', () => {
        const fn = (id=1, [arr= 2], {obj= 3}) => {//you can mix param types as long as they all define a value
          assert.equal(id, 1);
          assert.equal(arr, 2);
          assert.equal(obj, 3);
        };
        fn(void 0, [], {});
      });
    });
  });
  