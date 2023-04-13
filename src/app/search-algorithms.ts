// Big O = O(n)
export const linear_search = (arr: number[], target: number): number => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) return i;
  }
  return -1;
}

// Big O = O(log n)
export const binary_search = (arr: number[], target: number): number => {
  let left_index = 0;
  let right_index = arr.length - 1;
  while(left_index <= right_index) {
    let middle_index = Math.floor((left_index + right_index) / 2);
    if(target === arr[middle_index]) {
      return middle_index;
    }
    if(target < arr[middle_index]) {
      right_index = middle_index - 1;
    } else {
      left_index = middle_index + 1;
    }
  }
  return -1;
}

export const search = (arr: number[], target: number, left_index: number, right_index: number): number => {
  if(left_index > right_index) {
    return - 1;
  }
  let middle_index = Math.floor((left_index + right_index) / 2);
  if(target === arr[middle_index]) {
    return middle_index;
  }
  if(target < arr[middle_index]) {
    return search(arr, target, left_index, middle_index - 1);
  } else {
    return search(arr, target, middle_index + 1, right_index);
  }
}

// Big O = O(log n)
export const recursive_binary_search = (arr: number[], target: number): number => {
  return search(arr, length, 0, arr.length - 1);
}