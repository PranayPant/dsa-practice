/**
 *
 * The Problem: Last Stone Weight (LeetCode 1046)
 *
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 *
 * We play a game with the stones. On each turn, we choose the two heaviest stones and smash them together.
 * Suppose the stones have weights x and y with x <= y.
 *
 * The result of this smash is:
 * - If x == y, both stones are destroyed.
 * - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 *
 * At the end of the game, there is at most one stone left.
 *
 * Goal: Return the weight of the last remaining stone. If there are no stones left, return 0.
 */
export function lastStoneWeight(stones: number[]) {
    // Insert stones into MaxHeap
    // while(heap has > 1 stones)
    // pop twice
    // if weights equal, continue
    // else insert new stone with weight delta
    // If heap empty return 0
    // Else pop the last stone and return it's weight
}
