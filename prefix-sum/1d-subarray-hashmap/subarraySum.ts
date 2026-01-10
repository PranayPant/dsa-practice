/**
 * Given an array of integers nums and an integer k,
 * return the total number of continuous subarrays whose sum equals to k.
 */
export function subarraySum(nums: number[], k: number): number {
    let count: number = 0;
    let currentSum: number = 0;

    // TODO: Initialize a Map to store {prefix_sum: frequency}
    // Remember the crucial initialization for subarrays starting at index 0.
    const freq = new Map<number, number>();
    freq.set(0, 1); // Crucial: handles subarrays that start from index 0

    for (const num of nums) {
        // 1. Update the current running sum.
        currentSum += num;

        // 2. Check the map: If (currentSum - k) exists, add its frequency to 'count'.
        if (freq.has(currentSum - k)) {
            count += freq.get(currentSum - k);
        }

        // 3. Update the map with the currentSum's frequency.
        const currentSumFreq = freq.get(currentSum) ?? 0;
        freq.set(currentSum, currentSumFreq + 1);
    }

    return count;
}

// Example Test:
// console.log(subarraySum([1, 1, 1], 2)); // Expected: 2 (for [1,1] at index 0 and [1,1] at index 1)
// console.log(subarraySum([1, 2, 3], 3)); // Expected: 2 (for [1,2] and [3])

/*
 * Given a binary array nums (containing only 0 and 1),
 * find the maximum length of a contiguous subarray with an equal number of 0s and 1s.
 */
export function binarySubarray(nums: number[]) {
    let prefixSum = 0,
        maxLen = 0;
    const map = new Map<number, number>();
    map.set(0, -1); // base case - what is the index of prefix sum before index 0 (start)?

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i] === 1 ? 1 : -1; // the prefix sum represents state (num 1s - num 0s), not a running sum.
        // if we have seen this ratio of 1s to 0s before, we are now balanced
        if (map.has(prefixSum)) {
            const startIndex = map.get(prefixSum);
            maxLen = Math.max(maxLen, i - startIndex);
        } else {
            map.set(prefixSum, i);
        }
    }

    return maxLen;
}

/**
 *
 * @param nums number[]
 * @param k number
 * @returns number
 *
 * p[i] = p[j] - k
 * prefixSum -> p[j]
 * map -> {p[i]: i}
 */
export function longestSubarraySum(nums: number[], k: number) {
    let prefixSum = 0,
        maxLen = 0;
    let sumFreq = new Map<number, number>(); // stores previous sums and their start index
    sumFreq.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const needed = prefixSum - k;
        if (sumFreq.has(needed)) {
            const startIndex = sumFreq.get(needed);
            maxLen = Math.max(maxLen, i - startIndex);
        }
        if (!sumFreq.has(prefixSum)) {
            sumFreq.set(prefixSum, i);
        }
    }

    return maxLen;
}
