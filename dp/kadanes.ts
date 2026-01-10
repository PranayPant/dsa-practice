/**
 * Given an array of positive and negative integers,
 * find the maxmium sum of a contiguous subarray of any size.
 * @param nums number[]. Can contain negatives
 * @returns The maxmimum sum of a subarray of any size.
 * Example:
 * nums = [1, -2, 3, 10, -4]
 * Returns 13 (10 + 3)
 *
 * nums = [-1, -2, -3]
 * Retuns -1
 */
export function maxSum(nums: number[]) {
    let maxSoFar = nums[0],
        globalMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // Is the max so far helping us or hurting us?
        maxSoFar = Math.max(nums[i], nums[i] + maxSoFar);
        globalMax = Math.max(globalMax, maxSoFar);
    }
    return globalMax;
}

/**
 * Given an array of positive and negative integers,
 * find the maxmium product possible of any subarray of elements.
 * @param nums number[]. Can contain negatives
 * @returns The maxmimum sum of a subarray of any size.
 * Example:
 * nums = [1, -2, 3, 10, -4]
 * Returns 240 (1 * -2 * -4 * 3 * 10)
 *
 * nums = [-1, -2, -3, 10]
 * Retuns 60 (-2 * -3 * 10)
 */
export function maxProduct(nums: number[]) {
    let currentMax = nums[0],
        currentMin = nums[0],
        globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const tmpMax = Math.max(nums[i], nums[i] * currentMax, nums[i] * currentMin);
        currentMin = Math.min(nums[i], nums[i] * currentMax, nums[i] * currentMin);
        currentMax = tmpMax;
        globalMax = Math.max(globalMax, currentMax);
    }
    return globalMax;
}
