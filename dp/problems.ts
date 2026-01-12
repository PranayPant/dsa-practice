/**
 * The Problem: House Robber
 * Scenario:
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed. 
 * The only constraint stopping you is that adjacent houses have security systems connected. 
 * If you rob two adjacent houses on the same night, the alarm will go off.

 * Goal:
 * Given an integer array nums representing the amount of money of each house, 
 * return the maximum amount of money you can rob tonight without alerting the police.
 * Example:
 * Input: [1, 2, 3, 1]
 *  Explanation:
 *  Rob house 1 (money = 1).
 *  Rob house 3 (money = 3).
 *  Total = 1 + 3 = 4.
 * (Note: You can't rob house 2 because it is adjacent to house 1 and 3).
 */

function houseRobber(gains: number[]) {
    if (gains.length === 1) return gains[0];
    const dp = Array.from<number>({ length: gains.length }).fill(0);
    dp[0] = gains[0];
    dp[1] = Math.max(gains[0], gains[1]);
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 2] + gains[i], dp[i - 1]);
    }
    return dp[gains.length - 1];
}

function houseRobberOptimized(gains: number[]) {
    if (gains.length === 1) return gains[0];

    let beforePrev = 0,
        prev = 0,
        maxGains = 0;

    for (let i = 0; i < gains.length; i++) {
        maxGains = Math.max(gains[i] + beforePrev, prev);
        beforePrev = prev;
        prev = maxGains;
    }

    return maxGains;
}

/**
 * Problem: Maximum Subarray Sum
 * Scenario:
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * Example:
 * Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 6
 * Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.
 */

function maxSubarraySum(nums: number[]) {
    const dp = Array.from<number>({ length: nums.length }).fill(0);
    dp[0] = nums[0];
    let globalMax = nums[0];
    for (let i = 1; i < dp.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
        globalMax = Math.max(dp[i], globalMax);
    }
    return globalMax;
}

function maxSubarraySumOptimized(nums: number[]) {
    let currMax = nums[0],
        globalMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // Are we extending the chain or starting a new one?
        currMax = Math.max(nums[i], nums[i] + currMax);
        // Which chain was the longest so far?
        globalMax = Math.max(globalMax, currMax);
    }
    return globalMax;
}

/**
 * Problem: Unique Paths
 * Scenario:
 * A robot is located at the top-left corner of a m x n grid (marked 'Start').
 * The robot can only move either down or right at any point in time.
 * The robot wants to reach the bottom-right corner of the grid (marked 'Finish').
 * Goal:
 * How many possible unique paths are there?
 */

function uniquePaths(m: number, n: number) {
    // m rows and n columns
    // Initialize DP array
    // First row and first column are 1, since only 1 (shortest) path to get to each cell
    const dp = Array.from({ length: m }, () => Array(n).fill(1));

    // Start at cell (1, 1)
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            // Number of ways to get to a cell is
            // sum of way to get the cell above it and to the left of it
            dp[j][i] = dp[j - 1][i] + dp[j][i - 1];
        }
    }

    return dp[m - 1][n - 1];
}

function uniquePathsOptimized(m: number, n: number) {
    // We only need the row above, not whole grid
    const dp = Array.from<number>({ length: n }).fill(1);

    for (let j = 1; j < m; j++) {
        for (let i = 1; i < n; i++) {
            dp[i] = dp[i - 1] + dp[i];
        }
    }

    return dp[n - 1];
}

/**
 * Problem: 0/1 Knapsack
 * Scenario:
 * Given capacity W, weights wt[], values val[], and number of items n,
 * return the maximum value that fits in the knapsack (0/1, can't split items).
 */

function zeroOneKnapsack(weights: number[], values: number[], maxWeight: number) {
    const dp = Array.from({ length: maxWeight + 1 }, () => Array(values.length + 1).fill(0));

    for (let w = 1; w <= maxWeight; w++) {
        for (let i = 1; i <= values.length; i++) {
            const currValue = values[i];
            const currWeight = weights[i];

            if (currWeight > w) {
                // Can't choose this item - too heavy
                dp[w][i] = dp[w][i - 1];
            } else {
                // Max of skipping it and choosing it + previous max value at remaining capacity
                dp[w][i] = Math.max(dp[w][i - 1], currValue + dp[w - currWeight][i - 1]);
            }
        }
    }

    return dp[maxWeight][values.length];
}

function zeroOneKnapsackOptimized(weights: number[], values: number[], maxWeight: number) {
    const dp = Array.from<number>({ length: maxWeight + 1 }).fill(0);

    for (let i = 0; i < values.length; i++) {
        for (let w = 1; w <= maxWeight; w++) {
            const currWeight = weights[w];
            const currValue = values[i];
            for (let w = maxWeight; w >= currWeight; w--) {
                // value at 'w' without this item is just the current 'dp[w]'
                // value at 'w' WITH this item is 'val + dp[w - wt]'
                dp[w] = Math.max(dp[w], currValue + dp[w - currWeight]);
            }
        }
    }
    return dp[maxWeight];
}

function longestCommonSubsequence(text1: string, text2: string) {
    const dp = Array.from({ length: text1.length + 1 }, () => Array(text2.length + 1).fill(0));

    for (let t1 = 1; t1 <= text1.length; t1++) {
        for (let t2 = 1; t2 <= text2.length; t2++) {
            if (text1[t1 - 1] === text2[t2 - 1]) {
                dp[t1][t2] = dp[t1 - 1][t2 - 1] + 1;
            } else {
                dp[t1][t2] = Math.max(dp[t1][t2 - 1], dp[t1 - 1][t2]);
            }
        }
    }

    return dp[text1.length][text2.length];
}
