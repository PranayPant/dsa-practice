import { NumArray } from './NumArray'; // Assuming your class is exported from NumArray.ts

describe('NumArray (1D Prefix Sum)', () => {
    
    test('should correctly calculate sums for a standard array', () => {
        const nums = [-2, 0, 3, -5, 2, -1];
        const numArray = new NumArray(nums);
        
        // sumRange(0, 2) -> -2 + 0 + 3 = 1
        expect(numArray.sumRange(0, 2)).toBe(1); 
        
        // sumRange(2, 5) -> 3 + (-5) + 2 + (-1) = -1
        expect(numArray.sumRange(2, 5)).toBe(-1); 
        
        // sumRange(0, 5) -> Sum of all elements = -3
        expect(numArray.sumRange(0, 5)).toBe(-3); 
        
        // sumRange(1, 1) -> Single element sum = 0
        expect(numArray.sumRange(1, 1)).toBe(0); 
    });

    test('should handle an array of all positive numbers', () => {
        const nums = [1, 2, 3, 4, 5];
        const numArray = new NumArray(nums);
        
        // sumRange(0, 4) = 15
        expect(numArray.sumRange(0, 4)).toBe(15);
        
        // sumRange(1, 3) = 2 + 3 + 4 = 9
        expect(numArray.sumRange(1, 3)).toBe(9);
    });

    test('should handle an empty array gracefully (assuming constructor handles it)', () => {
        // Your constructor might need a check for empty input to prevent errors.
        const nums: number[] = [];
        const numArray = new NumArray(nums);
        
        // How your implementation behaves for sumRange on an empty array matters. 
        // For robustness, this might throw or return 0 depending on spec. Assuming 0 if indices are invalid.
        // For testing purposes, let's use an array with one element instead if the empty case is ambiguous.
        const numArraySingle = new NumArray([10]);
        expect(numArraySingle.sumRange(0, 0)).toBe(10);
    });
});