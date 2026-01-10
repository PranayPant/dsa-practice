/*
 * Problem:
 * Given an array of numbers,
 * Move all 0s to the end of the array in-place, 
 * while keeping the relative order of non-zero elements.
 * 
 * e.g. nums: [0, 1, 0, 3, 12]
 * Result: [1, 3, 12, 0, 0]
 */
export function moveZeroes(nums: number[]){

    let slow = 0;

    // Invariant: [0...slow-1] are all non-zero
    for(let fast = 0; fast < nums.length; fast += 1){
        if(nums[fast] !== 0){
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
            slow += 1;
        }
    }

    return nums;
}

/*
 * Given: nums: number[], val: number
 * Problem: Move all ocurences of val at the end
 * Return: number of values that are not val
 * 
 * nums = [3, 2, 2, 3]
 * val = 3
 * Returns 2
 * 
 * nums = [0, 1, 2, 2, 3, 0, 4, 2];
 * val = 2
 * Returns 5
 */
export function removeElement(nums: number[], val: number){
    
    let slow = 0;

    // Invariant: [0...slow-1] does not include val

    for(let fast = 0; fast < nums.length; fast += 1){
        if(nums[fast] !== val){
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
            slow += 1;
        }
    }

    return slow;

}

/**
 * Begin: nums = [3, 2, 2, 3], val = 3 | slow = 0, fast = 1
 * iteration 1
 *     nums = [2, 3, 2, 3]
 *     slow = 0, fast = 2
 * iteration 2
 *     nums = [2, 2, 3, 3]
 *     slow = 1, fast = 3
 * iteration 3
 *     nums = [2, 2, 3, 3]
 *     slow = 2, fast = 4
 */