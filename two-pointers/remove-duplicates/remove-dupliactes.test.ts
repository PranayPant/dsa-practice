import { removeDuplicates, removeDuplicatesAllowTwice } from './remove-duplicates'

describe("removeDuplicates (sorted array, keep one occurrence)", () => {

  test("empty array", () => {
    const nums: number[] = [];
    const k = removeDuplicates(nums);

    expect(k).toBe(0);
  });

  test("single element array", () => {
    const nums = [1];
    const k = removeDuplicates(nums);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  test("array with no duplicates", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);

    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  test("array with all duplicates", () => {
    const nums = [2, 2, 2, 2, 2];
    const k = removeDuplicates(nums);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([2]);
  });

  test("array with mixed duplicates", () => {
    const nums = [1, 1, 2, 2, 3];
    const k = removeDuplicates(nums);

    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  test("duplicates at the beginning", () => {
    const nums = [1, 1, 1, 2, 3];
    const k = removeDuplicates(nums);

    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  test("duplicates at the end", () => {
    const nums = [1, 2, 3, 3, 3];
    const k = removeDuplicates(nums);

    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  test("negative numbers", () => {
    const nums = [-3, -3, -1, -1, 0, 2, 2];
    const k = removeDuplicates(nums);

    expect(k).toBe(4);
    expect(nums.slice(0, k)).toEqual([-3, -1, 0, 2]);
  });

  test("already minimal array after deduplication", () => {
    const nums = [5, 5];
    const k = removeDuplicates(nums);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([5]);
  });

  test("large array with repeating pattern", () => {
    const nums = Array(1000).fill(0).flatMap((_, i) => [i, i]);
    const k = removeDuplicates(nums);

    expect(k).toBe(1000);
    expect(nums.slice(0, k)).toEqual(
      Array.from({ length: 1000 }, (_, i) => i)
    );
  });

});

describe('removeDuplicatesAllowTwice', () => {

  test('empty array', () => {
    const nums: number[] = [];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(0);
    expect(nums).toEqual([]);
  });

  test('single element', () => {
    const nums = [1];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  test('two same elements (allowed)', () => {
    const nums = [2, 2];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 2]);
  });

  test('three same elements (one removed)', () => {
    const nums = [3, 3, 3];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([3, 3]);
  });

  test('no duplicates at all', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  test('mixed duplicates', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
  });

  test('all elements duplicated more than twice', () => {
    const nums = [1,1,1,2,2,2,3,3,3];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([1,1,2,2,3,3]);
  });

  test('long run of same number', () => {
    const nums = [7,7,7,7,7,7];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([7,7]);
  });

  test('negative numbers', () => {
    const nums = [-2, -2, -2, -1, -1, 0];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([-2, -2, -1, -1, 0]);
  });

  test('already valid input (each at most twice)', () => {
    const nums = [1,1,2,2,3,3];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(6);
    expect(nums.slice(0, k)).toEqual([1,1,2,2,3,3]);
  });

  test('array with zeros', () => {
    const nums = [0,0,0,1,1,1];
    const k = removeDuplicatesAllowTwice(nums);
    expect(k).toBe(4);
    expect(nums.slice(0, k)).toEqual([0,0,1,1]);
  });

});
