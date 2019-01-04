// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Object literal properties may be computed values', () => {
    it('a computed property `x` needs to be surrounded by `[]`', () => {
      const propertyName = 'x';
      const obj = {[propertyName]: 1};//putting the brackets around property name tells JS to do "something" that something is look for the variable
      assert.equal(obj.x, 1);
    });
    it('can also get a function assigned', () => {
      const key = 'func';
      const obj = {[key]: () => 'seven'};//write an inline function after [key]: Teaching that a key can call a new string as the value
      assert.equal(obj.func(), 'seven');
    });
    it('the key may also be the result of a function call', () => {
      const getName = () => 'propertyName';
      const obj = {[getName()]() {return 'seven'}};//getName() make getName a function to call propertyName
      assert.equal(obj.propertyName(), 'seven');
    });
    it('the key can also be constructed by an expression', () => {
      const what = 'Name';
      const obj = {['property' + what]: null};//Change 'key to Name' and proper to property. Give
      assert('propertyName' in obj);
    });
    it('accessor keys can be computed names too', () => {
      const obj = {
        get ['key']() {return 1},//use the get accessor 
        
      };
      assert.equal(obj.key, 1);
    });
  });
  