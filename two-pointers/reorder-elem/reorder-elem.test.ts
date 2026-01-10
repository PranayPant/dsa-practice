import { moveZeroes, removeElement } from "./reorder-elem";

describe("moveZeroes", () => {

  test("moves zeros to the end while keeping order", () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });

  test("array with no zeros remains unchanged", () => {
    const nums = [1, 2, 3, 4];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 4]);
  });

  test("array with all zeros remains unchanged", () => {
    const nums = [0, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual([0, 0, 0]);
  });

  test("single element zero", () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums).toEqual([0]);
  });

  test("single element non-zero", () => {
    const nums = [5];
    moveZeroes(nums);
    expect(nums).toEqual([5]);
  });

  test("empty array", () => {
    const nums: number[] = [];
    moveZeroes(nums);
    expect(nums).toEqual([]);
  });

  test("zeros already at the end", () => {
    const nums = [1, 2, 3, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 0, 0]);
  });

  test("zeros at the beginning", () => {
    const nums = [0, 0, 1, 2];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 0, 0]);
  });

  test("zeros in the middle", () => {
    const nums = [1, 0, 2, 0, 3];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 0, 0]);
  });

  test("handles negative numbers", () => {
    const nums = [0, -1, 0, -3, 5];
    moveZeroes(nums);
    expect(nums).toEqual([-1, -3, 5, 0, 0]);
  });

  test("multiple scattered zeros", () => {
    const nums = [0, 1, 0, 0, 2, 0, 3];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3, 0, 0, 0, 0]);
  });

});


describe("removeElement (two pointers)", () => {

  test("removes value from middle", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;

    const k = removeElement(nums, val);

    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 2]);
  });

  test("removes value from beginning", () => {
    const nums = [1, 1, 2, 3];
    const val = 1;

    const k = removeElement(nums, val);

    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 3]);
  });

  test("removes value from end", () => {
    const nums = [1, 2, 3, 4];
    const val = 4;

    const k = removeElement(nums, val);

    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  test("removes multiple scattered values", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    const k = removeElement(nums, val);

    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 3, 0, 4]);
  });

  test("array with no matching values", () => {
    const nums = [1, 2, 3];
    const val = 4;

    const k = removeElement(nums, val);

    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  test("array with all values matching", () => {
    const nums = [7, 7, 7, 7];
    const val = 7;

    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  test("single element equal to val", () => {
    const nums = [5];
    const val = 5;

    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  test("single element not equal to val", () => {
    const nums = [5];
    const val = 3;

    const k = removeElement(nums, val);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([5]);
  });

  test("empty array", () => {
    const nums: number[] = [];
    const val = 1;

    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums).toEqual([]);
  });

});
