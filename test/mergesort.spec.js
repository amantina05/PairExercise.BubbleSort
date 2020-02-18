const { expect } = require('chai');
const { split, merge } = require('../src/mergesort');

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2])).to.be.deep.equal([[1], [2]]);
  });

  it('should still split an array into two halves with an odd number', function() {
    expect(split([1, 2, 3])).to.be.deep.equal([[1], [2, 3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 2, 9], [3, 5, 6])).to.be.deep.equal([1, 2, 3, 5, 6, 9]);
  });
});
