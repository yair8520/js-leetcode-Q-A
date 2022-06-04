function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

function insertSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }
  return arr;
}

function mergeSort(arr, start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    let left = mergeSort(arr, start, mid);
    let right = mergeSort(arr, mid + 1, end);
    return merge(left, right);
  }
  return arr.slice(start, end + 1);
}

function merge(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) {
    arr.push(...arr2.slice(j));
  }
  if (j === arr2.length) {
    arr.push(...arr1.slice(i));
  }
  return arr;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let pivotIndex = findPivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

function findPivot(arr, start, end) {
  let i = start - 1;
  let j = start;
  let pivot = arr[end];
  while (j < end) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}
