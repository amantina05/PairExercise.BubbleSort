const { expect } = require('chai');
const bubbleSort = require('../src/bubblesort');

const unsorted = [2, 4, 5, 7, 3, 8, 6, 1];
const sorted = [1, 2, 3, 4, 5, 6, 7, 8];
const sortedInc = [8, 7, 6, 5, 4, 3, 2, 1];

describe('BubbleSort', () => {
  it('should sort an unsorted array', () => {
    expect(
      bubbleSort(unsorted, unsorted.length - 1, (i, j) => {
        if (i < j) return 1;
        if (i > j) return -1;
        return 0;
      })
    ).to.be.deep.equal(sortedInc);
  });
});
