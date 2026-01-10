/**
 * You are given a sorted array of integers.
 * 
 * Remove duplicates in-place such that each number appears only once.
 * 
 * Return the number of unique elements.
 * 
 * e.g. nums = [0, 0, 1, 1, 1, 2, 3, 3]
 * 
 * Result should be 4
 */

export function removeDuplicates(nums: number[]){

    if(nums.length < 1) return 0;

    let slow = 1;

    // Invariant: [0...slow-1] only contain unique elements
    // slow points to the next write position
    // slow-1 is the last unique element
    // Invariant we want
    // At all times:
    // Indices [0 … slow-1] contain only unique elements
    // Indices [slow … fast-1] contain unknown / potential duplicates
    // Indices [fast … end] are unprocessed
    for(let fast = 1; fast < nums.length; fast += 1){
        // Compare fast with slow-1 (since slow can be a duplicate)
        if(nums[fast] !== nums[slow-1]){
            nums[slow] = nums[fast]
            slow += 1
        }
    }

    return slow;
}

export function removeDuplicatesAllowTwice(nums: number[]){
    if(nums.length <= 2) return nums.length;

    let slow = 2;

    // Invariant: [0...slow-1] contain at most 1 repetition
    for(let fast = 2; fast < nums.length; fast += 1){
        // Compare fast with slow-1
        if(nums[fast] !== nums[slow-2]){
            nums[slow] = nums[fast]
            slow += 1
        }
    }

    return slow;
}
