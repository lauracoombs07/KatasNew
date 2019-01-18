// 75: Promise - basics 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {
    it('`Promise` is a global function', function() {
      const expectedType = 'function';//a promise is a function
      assert.equal(typeof Promise, expectedType);
    });
    describe('the constructor', function() {
      it('instantiating it without params throws', function() {
        const fn = () => { Promise(e) }//params after the promise. it can't return anything if it doesn't have anything to do
        assert.throws(fn);
      });  
      it('expects a function as parameter', function() {
        const param = () => {};//expects a function. wrote an arrow function
        assert.doesNotThrow(() => { new Promise(param); });//if the promise resolves, it returns and finishes
      });  
    });
    describe('simplest promises', function() {
      it('resolve a promise by calling the `resolve` function given as first parameter', function(done) {
        let promise = new Promise((resolve,) => {
          return resolve()//return resolve function
        });
        promise
          .then(() => done())
          .catch(() => done(new Error('The promise is expected to resolve.')));
      });
      it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function(done) {
        let promise = new Promise((resolve) => {
          return resolve(42).then();//promise 42 and .then pulls the value out
        });
        promise
          .then(value => {assert.equal(value, 42); done(); })
          .catch(() => done(new Error('The promise is expected to resolve with 42!')));
      });
      it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
        let promise = new Promise(() => {
          reject();
        });
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
    });
    describe('an asynchronous promise', function() {
      it('can resolve later, also by calling the first callback', function(done) {
          let promise = new Promise((resolve) => {//we were trying to use the resolve() but resolve wasnt defined
          setTimeout(() => resolve(), 100);
        });
        promise
          .then(() => done())
          .catch(() => done(new Error('The promise is expected to resolve.')));
      });
      it('reject it at some later point in time, calling the 2nd callback', function(done) {
        let promise = new Promise((resolve, reject) => {//make a param resolve so reject is the second param is reject
          setTimeout(() => reject(), 100);
        });
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
    });
    describe('test library (mocha here) support for promises', function() {
      it('just returning the promise makes the test library check that the promise resolves', function() {
        let promise = new Promise((resolve, reject) => {//reject and resolve were being called in the wrong order
          resolve();
        });
        // return the promise to mocha, it has the checking for promise resolving built in, when it receives a promise
        return promise;
      });
    });
  });
  