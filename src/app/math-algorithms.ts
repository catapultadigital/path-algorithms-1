// Big O = O(n)
export const fibonacci = (num: number): number[] => {
  if(typeof num !== 'number') return [];
  const result = [0, 1];
  for(let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

// Big O = O(n)
export const factorial = (num: number): number => {
  let result = 1;
  for(let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Big O = O(n)
export const is_prime = (num: number): boolean => {
  if(num < 2) return false;
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

// Big O = O(sqrt(n))
export const is_prime_optimized = (num: number): boolean => {
  if(num < 2) return false;
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

// Big O = O(log n)
export const is_power_of_two = (num: number): boolean => {
  if(num < 1) return false;
  while(num > 1) {
    if(num % 2 !== 0) return false;
    num = num/2;
  }
  return true;
}

// Big O = O(1);
export const is_power_of_two_bitwise = (num: number): boolean => {
  if(num < 1) return false;
  return (num & (num - 1)) === 0;
}

// Big O = O(2^n)
export const recursive_fibonacci = (num: number): number => {
  if(num < 2) return num;
  return recursive_fibonacci(num-1) + recursive_fibonacci(num-2);
}

// Big O = O(n)
export const recursive_factorial = (num: number): number => {
  if(num === 0) return 1;
  return num * recursive_factorial(num - 1);
}