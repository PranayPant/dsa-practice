// Fixed window
export function maxSumOfSizeK(nums: number[], k: number) {
    let L = 0,
        maxSum = 0,
        tmpSum = 0;

    for (let R = 0; R < nums.length; R += 1) {
        tmpSum += nums[R];

        if (R - L + 1 === k) {
            // We found the max sum in this window
            // Store current max sum across all windows
            // Adjust tmpSum to prepare for next iteration
            maxSum = Math.max(tmpSum, maxSum);
            tmpSum -= nums[L];
            L += 1;
        }
    }

    return maxSum;
}

// Dynamic window
// e.g. abcabcbb
export function longestSubstring(s: string) {
    let L = 0,
        R = 0;
    const charSet = new Set<string>();
    let maxLen = 1;

    for (; R < s.length; R++) {
        while (charSet.has(s[R])) {
            charSet.delete(s[L]);
            L += 1;
        }
        charSet.add(s[R]);
        maxLen = Math.max(maxLen, R - L + 1);
    }

    return maxLen;
}
