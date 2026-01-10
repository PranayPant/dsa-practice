/**
 * Given an array of coins, find the minimum number of coins that sum to the amount
 * @param coins array if positive integers
 * @param amount a positive integer
 * coins = [1, 2, 5, 10, 25], target = 25
 */
function coinChange(coins: number[], amount: number) {
    const dp = Array.from<number>({ length: amount + 1 }).fill(Infinity);
    dp[0] = 0;
    for (let amt = 1; amt <= amount; amt++) {
        for (const coin of coins) {
            if (coin <= amt) {
                dp[amt] = Math.min(dp[amt], dp[amt - coin] + 1);
            }
        }
    }
    return dp[amount];
}

/**
 * Given an array of coins, find the number of possible ways we can total the amount
 * @param coins array if positive integers
 * @param amount a positive integer
 * coins = [1, 2, 5, 10, 25], target = 25
 */
function coinChange2(coins: number[], amount: number) {
    const dp = Array.from<number>({ length: amount + 1 }).fill(0);
    for (let i = 1; i < amount; i++) {
        for (const coin of coins) {
            if (coin + i - 1 === i) {
                dp[i]++;
            }
        }
    }
}

/**
 * The Problem (LeetCode 198):
 * You are a robber. You cannot rob adjacent houses.
 * Given an array of money [1, 2, 3, 1], what is the max money you can steal?
 * Option A: Rob house 0 + house 2 = $4
 * Option B: Rob house 1 + house 3 = $3
 * Max: 4.
 */
function houseRobber(money: number[]) {
    const n = money.length;
    if (n === 0) return 0;
    if (n === 1) return money[0];

    const dp = Array(n).fill(0);
    dp[0] = money[0];
    dp[1] = Math.max(money[0], money[1]);
    for (let i = 2; i < money.length; i++) {
        dp[i] = Math.max(dp[i - 2] + money[i], dp[i - 1]);
    }
    return dp[n - 1];
}
