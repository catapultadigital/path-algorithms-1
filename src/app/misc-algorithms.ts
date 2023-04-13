// Big O = O(mn)
export const cartesian_product = (arr1: number[], arr2:number[]): number[][] => {
  const res = [];
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      res.push([arr1[i], arr2[j]])
    }
  }
  return res;
}

// Big O = O(n)
export const climbing_staircase = (steps: number): number => {
  const steps_number = [1, 2];
  for(let i = 2; i <= steps; i++) {
    steps_number[i] = steps_number[i - 1] + steps_number[i - 2];
  }
  return steps_number[steps - 1];
}

// Big O = O(2^n)
// test - (3, 'A', 'C', 'B')
export const hanoi_tower = (disks: number, initial: string, final: string, using: string): void => {
  if(disks === 1) {
    console.log(`Move disk 1 from ${initial} to ${final}`);
    return;
  };
  hanoi_tower(disks - 1, initial, using, final);
  console.log(`Move disk ${disks} from ${initial} to ${final}`);
  hanoi_tower(disks - 1, using, final, initial);
}