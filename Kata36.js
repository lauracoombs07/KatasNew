// 36: Symbol.keyFor - retrieves a shared symbol key from the global symbol registry
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Symbol.keyFor()` gets the symbol key for a given symbol', function() {
    it('pass the symbol to `keyFor()` and you get its key', function() {
      const key = Symbol.keyFor(Symbol.for('foo'));//symbol.keyFor(added.keyFor afterSymbol)
      assert.equal(key, 'foo');
    });
    it('local symbols are not in the runtime-wide registry', function() {
      // Hint: `Symbol()` creates a local symbol!
      const localSymbol = Symbol('foo');//symbol() means local symbol for is global
      const key = Symbol.keyFor(localSymbol);
      assert.equal(key, void 0);
    });
    it('predefined symbols are not in the runtime-wide registry either', function() {
      const key = Symbol.keyFor(Symbol.iterator);//iterator has its own id so it doesn't get stuck in its own loop. it has a predefined symbol
      assert.equal(key, void 0);
    });
    it('for non-Symbols throws an error', function() {
      function fn() {
        Symbol.keyFor(('foo'));//trying to ket the symbol for a key that doesn't exist. removed symbolfor
      }
      assert.throws(fn);
    });
  });
  