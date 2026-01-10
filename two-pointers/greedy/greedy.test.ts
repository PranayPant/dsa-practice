import { maxArea } from "./greedy";

describe('Container With Most Water (maxArea)', () => {
    
    // 1. The Classic LeetCode Example
    test('Standard Case: Should match the classic example', () => {
        const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        // Explanation: Best pair is 8 (idx 1) and 7 (idx 8).
        // Height = min(8, 7) = 7. Width = 8 - 1 = 7. Area = 49.
        expect(maxArea(input)).toBe(49);
    });

    // 2. Base Cases (Small Inputs)
    test('Base Case: Two lines (Smallest valid container)', () => {
        const input = [1, 1];
        // Height 1, Width 1 -> Area 1
        expect(maxArea(input)).toBe(1);
    });

    test('Base Case: Two lines with different heights', () => {
        const input = [1, 2];
        // Height min(1,2)=1, Width 1 -> Area 1
        expect(maxArea(input)).toBe(1);
    });

    // 3. Edge Cases (Invalid Containers)
    test('Edge Case: Empty array should return 0', () => {
        expect(maxArea([])).toBe(0);
    });

    test('Edge Case: Single element array should return 0', () => {
        // A single line cannot form a container
        expect(maxArea([5])).toBe(0);
    });

    // 4. Strategic logic checks (Does the greedy logic work?)
    test('Logic Check: Should prioritize Width over Height', () => {
        // [1, 100, 1]
        // Pair (0, 2): H=1, W=2 -> Area 2
        // Pair (0, 1): H=1, W=1 -> Area 1
        // Pair (1, 2): H=1, W=1 -> Area 1
        // Even though 100 is huge, the wide base of small numbers wins.
        expect(maxArea([1, 100, 1])).toBe(2);
    });

    test('Logic Check: Should prioritize Height over Width', () => {
        // [1, 100, 200, 1]
        // Outer pair (1,1): Area 3
        // Inner pair (100, 200): Height 100 * Width 1 = 100.
        // The algorithm must move inward from the 1s to find the 100/200.
        expect(maxArea([1, 100, 200, 1])).toBe(100);
    });

    test('Logic Check: Flat line (All same heights)', () => {
        // [5, 5, 5, 5]
        // First and Last (Indices 0 and 3): Width 3 * Height 5 = 15.
        expect(maxArea([5, 5, 5, 5])).toBe(15);
    });

    test('Logic Check: Ascending sorted order', () => {
        // [1, 2, 3, 4, 5, 6, 7, 8]
        // Optimal is (idx 0 vs 7) -> 1*7 = 7? No.
        // Let's trace:
        // (1,8) -> Area 7. Remove 1.
        // (2,8) -> 2*6 = 12. Remove 2.
        // ...
        // (4,8) -> 4*4 = 16.
        // (5,8) -> 5*3 = 15.
        // Correct answer is likely involving the larger numbers closer together.
        // Max is 4 (idx 3) and 8 (idx 7) -> min(4,8)*4 = 16.
        expect(maxArea([1, 2, 3, 4, 5, 6, 7, 8])).toBe(16);
    });

    test('Logic Check: Descending sorted order', () => {
        // [8, 7, 6, 5, 4, 3, 2, 1]
        // Similar logic, just reversed. 4 (idx 4) and 8 (idx 0) -> min(4,8)*4 = 16.
        expect(maxArea([8, 7, 6, 5, 4, 3, 2, 1])).toBe(16);
    });

    // 5. Large Input / Performance
    test('Performance: Should handle large inputs efficiently (O(N))', () => {
        // Create an array of 10,000 elements with value 100
        const input = new Array(10000).fill(100);
        // Max area is first and last: width 9999 * height 100
        expect(maxArea(input)).toBe(999900);
        
        // If the algo was O(N^2), this might timeout or be slow.
        // O(N) runs instantly.
    });

    // 6. Tricky "Valley" Case
    test('Tricky Case: High walls on outside, dip in middle', () => {
        // [10, 1, 1, 1, 10]
        // The two outer 10s should be the max.
        // Width 4, Height 10 -> Area 40.
        expect(maxArea([10, 1, 1, 1, 10])).toBe(40);
    });
});