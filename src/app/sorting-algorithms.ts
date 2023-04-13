// Big O = O(n^2)
export const bubble_sort = (arr: number[]): number[] => {
  let swapped: boolean;
  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Big O = O(n^2)
export const insertion_sort = (arr: number[]): number[] => {
  for(let i = 1; i < arr.length; i++){
    let nti = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = nti;
  }
  return arr;
}

// Big O = O(n log n)
export const quick_sort = (arr: number[]): number[] => {
  if(arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quick_sort(left), pivot, ...quick_sort(right)];
}

export const merge = (left: number[], right: number[]): number[] => {
  let sorted = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

// Big O = O(n log n)
export const merge_sort = (arr: number[]): number[] => {
  if(arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(merge_sort(left), merge_sort(right));
}