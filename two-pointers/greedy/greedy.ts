/*
 * Problem: Given nums: number[], find the largest value of A where
 * A = L(i,j) x W(i,j)
 * L(i,j) = Math.min(nums[i], nums[j])
 * W(i,j) = j - i
 * i <= j < nums.length
 */
export function maxArea(nums: number[]) {
    if (nums.length < 2) return 0;
    let L = 0,
        R = nums.length - 1,
        max = 0;
    while (L < R) {
        const width = R - L;
        const height = Math.min(nums[L], nums[R]);
        const area = width * height;
        max = Math.max(max, area);
        if (nums[L] < nums[R]) {
            L += 1;
        } else {
            R -= 1;
        }
    }
    return max;
}

/**
 * Given an array
 * where each element represents the maximum jump length from that position,
 * determine if you can reach the last index.
 * @param distances Represents distances to jump at each index
 * @returns true/false (boolean) if we can reach the end
 *
 */
export function maxJumpDistance(distances: number[]) {
    let maxIndexReached = 0;
    for (let i = 0; i < distances.length; i++) {
        if (i > maxIndexReached) {
            return false;
        }
        maxIndexReached = Math.max(maxIndexReached, i + distances[i]);
    }
    return true;
}
