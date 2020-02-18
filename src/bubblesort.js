function bubbleSort(array, index = array.length - 1, comparator) {
  let i = 0;
  let j = 1;

  if (index === 0) return array;

  while (index >= j) {
    if (comparator(array[i], array[j]) === 1) {
      [array[i], array[j]] = [array[j], array[i]];
    }

    i += 1;
    j += 1;
  }

  return bubbleSort(array, index - 1, comparator);
}

module.exports = bubbleSort;
