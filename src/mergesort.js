function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */

  let mid = wholeArray.length / 2;
  mid = Math.floor(mid);

  const firstHalf = wholeArray.slice(0, mid);
  const secondHalf = wholeArray.slice(mid);
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  let i = 0;
  let j = 0;

  const mergedArr = [];
  while (array1[i] && array2[j]) {
    if (array1[i] < array2[j]) {
      mergedArr.push(array1[i]);
      i++;
    } else if (array1[i] > array2[j]) {
      mergedArr.push(array2[j]);
      j++;
    }
  }
  while (array1[i]) {
    mergedArr.push(array1[i]);
    i++;
  }
  while (array2[j]) {
    mergedArr.push(array2[j]);
    j++;
  }

  return mergedArr;
}

module.exports = { split, merge };
