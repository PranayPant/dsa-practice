/**
 * The Problem
 * Input: A sorted array of integers numbers (e.g., [2, 2, 2, 3, 6, 7, 7, 11, 15]) and a target (e.g., 9).
 * Goal: Find all unique pairs of two numbers that add up to target.
 * Constraint: The solution must use Constant Space O(1).
 */
export function twoSum(nums: number[], target: number, start: number) {
    let n = nums.length,
        L = start,
        R = n - 1;
    const pair: number[][] = [];

    while (L < R) {
        const sum = nums[L] + nums[R];
        if (sum === target) {
            pair.push([nums[L], nums[R]]);

            while (L < R && nums[L] === nums[L + 1]) L++; // Skip all left duplicates
            while (L < R && nums[R] === nums[R - 1]) R--; // Skip all right duplicates

            // Find next pair
            L++;
            R--;
        } else if (sum < target) {
            L++;
        } else {
            R--;
        }
    }

    return pair;
}

export function kSum(nums: number[], target: number, start: number, k: number) {
    if (k === 2) return twoSum(nums, target, start);

    const res: number[][] = [];

    for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        const pairs = kSum(nums, target - nums[i], i + 1, k - 1);
        if (pairs.length) {
            pairs.forEach((pair) => {
                res.push([nums[i], ...pair]);
            });
        }
    }
    return res;
}

/**
 *
 * @param nums sorted num array (may contain duplicates)
 * @param startIndex 0-based index of where to start looking for the sum
 * @param targetSum sum to look for
 * @returns nums[] indices of nums that sum to targetSum
 */
function kSumHelper(nums: number[], startIndex: number, targetSum: number) {
    let L = startIndex,
        R = nums.length - 1;
    let result = [];
    while (L < R) {
        const currSum = nums[L] + nums[R];
        if (currSum < targetSum) {
            L++;
        } else if (currSum > targetSum) {
            R--;
        } else {
            result.push([nums[L], nums[R]]);
            while (L < R && nums[L] === nums[L + 1]) L++;
            while (L < R && nums[R] === nums[R - 1]) R--;

            // Find next pair
            L++;
            R--;
        }
    }
    return result;
}

function ksum(nums: number[], startIndex: number, targetSum: number, k: number) {
    if (k === 2) {
        return kSumHelper(nums, startIndex, targetSum);
    }
    const result: number[][] = [];
    for (let i = startIndex; i < nums.length; i++) {
        // Skip duplicates
        if (i > startIndex && nums[i] === nums[i - 1]) continue;
        const pairs = ksum(nums, i + 1, targetSum - nums[i], k - 1);
        for (const pair of pairs) {
            result.push([nums[i], ...pair]);
        }
    }
    return result;
}
