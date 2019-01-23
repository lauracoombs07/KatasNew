// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Spread syntax with strings", () => {
  it("expands each character of a string by prefixing it with `...`", function() {
    const [a, b] = [..."ab"]; //changed the order of the []
    assert.equal(a, "a");
    assert.equal(b, "b");
  });
  it("expands any kind of character", function() {
    const arr = [..."1", " ", "\u2622", " ", "2"]; //including unicode \u... or '' or ' '
    assert.deepEqual(arr, ["1", " ", "☢", " ", "2"]);
  });
  it("works anywhere inside an array (must not be last)", function() {
    const letters = ["a", ..."bcd", "e", "f"]; //spread the ...'string'
    assert.equal(letters.length, 6);
  });
  it("don`t confuse with the rest operator", function() {
    const rest = [..."1234", "5"]; //spread 1234 into the array. 5 is the end
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });
  it("can also be used as function parameter", function() {
    const max = Math.max(..."12345"); //spread into the param
    assert.deepEqual(max, 5);
  });
});
