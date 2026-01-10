/**
 * The Problem (LeetCode 198):
 * You are a robber. You cannot rob adjacent houses. 
 * Given an array of money [1, 2, 3, 1], what is the max money you can steal?
 * Option A: Rob house 0 + house 2 = $4
 * Option B: Rob house 1 + house 3 = $3
 * Max: 4.
 */

export function houseRobber(nums: number[]){

    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let maxPrev = 0, maxBeforePrev = 0;
    for(let i = 0; i < nums.length; i++){
        const currentMax = Math.max(maxPrev, nums[i] + maxBeforePrev)
        maxBeforePrev = maxPrev;
        maxPrev = currentMax;
    }

    return maxPrev;
}