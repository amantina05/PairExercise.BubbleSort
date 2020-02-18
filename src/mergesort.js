function split(wholeArray) {
  let mid = wholeArray.length / 2;
  mid = Math.floor(mid);

  const firstHalf = wholeArray.slice(0, mid);
  const secondHalf = wholeArray.slice(mid);
  return [firstHalf, secondHalf];
}

function lt(a, b) {
  return a < b;
}

function merge(array1, array2, comparator = lt) {
  let i = 0;
  let j = 0;

  const mergedArr = [];
  while (array1[i] && array2[j]) {
    if (comparator(array1[i], array2[j])) {
      mergedArr.push(array1[i]);
      i++;
    } else if (comparator(array2[j], array1[i])) {
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

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let [left, right] = split(array);

  left = mergeSort(left);
  right = mergeSort(right);
  let merged = merge(left, right);
  console.log(merged);
  return merged;
}

module.exports = { split, merge, mergeSort };
