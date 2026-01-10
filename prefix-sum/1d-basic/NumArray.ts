/**
 * Implement a class NumArray that initializes with an array of numbers. 
 * It should have a method sumRange(left, right) that returns the sum of 
 * the elements between indices left and right, inclusive. You must use 
 * a prefix sum array for O(1) query time.
 */
class NumArray {
    // You will store your prefix sum array here.
    private prefixSums: number[] = []; 

    constructor(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                this.prefixSums[i] = nums[i];
            } else {
                this.prefixSums[i] = this.prefixSums[i - 1] + nums[i];
            }
        }
    }

    sumRange(left: number, right: number): number {
        // TODO: Use the prefix sum array to calculate the range sum in O(1).
        // Remember the edge case for when left is 0.
        if( left === 0 ) {
            return this.prefixSums[right];
        } else {
            return this.prefixSums[right] - this.prefixSums[left - 1];
        }
    }
}

export { NumArray };

// Example Test:
// const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
// console.log(obj.sumRange(0, 2)); // Expected: -2 + 0 + 3 = 1
// console.log(obj.sumRange(2, 5)); // Expected: 3 + (-5) + 2 + (-1) = -1