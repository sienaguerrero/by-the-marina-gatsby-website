/**
 * Count pairs of integers whose absolute difference equals `k`.
 *
 * Given an array of positive integers and a target difference `k`, we want the
 * number of pairs (a, b) with |a - b| === k.
 *
 * Two common interpretations show up in interviews, so both are provided:
 *
 *   1. `countUniqueDifferencePairs` — count each *distinct value pair* once,
 *      regardless of how many times the values repeat (LeetCode 532 style).
 *
 *   2. `countDifferencePairs` — count every pair of array *positions*, so
 *      duplicates multiply the total.
 *
 * Both run in O(n) time and O(n) space using a frequency map, rather than the
 * naive O(n^2) double loop.
 */

/**
 * Number of distinct value pairs {a, b} with |a - b| === k.
 *
 * Example: [1, 5, 3, 4, 2], k = 2  ->  3   (the pairs (1,3), (3,5), (2,4))
 * Example: [1, 3, 1, 5, 4],  k = 0  ->  1   (only value 1 repeats)
 */
export function countUniqueDifferencePairs(nums: number[], k: number): number {
  if (k < 0) return 0;

  const freq = new Map<number, number>();
  for (const n of nums) {
    freq.set(n, (freq.get(n) ?? 0) + 1);
  }

  let count = 0;
  for (const [value, occurrences] of freq) {
    if (k === 0) {
      // A value pairs with itself only when it appears at least twice.
      if (occurrences > 1) count++;
    } else if (freq.has(value + k)) {
      // Count each unordered pair once by only looking "upward".
      count++;
    }
  }

  return count;
}

/**
 * Number of ordered-position pairs (i, j), i < j, with |nums[i] - nums[j]| === k.
 * Duplicates are counted with their multiplicities.
 *
 * Example: [1, 1, 3], k = 2  ->  2   (both 1s pair with the 3)
 * Example: [2, 2, 2], k = 0  ->  3   (C(3, 2) pairs of equal values)
 */
export function countDifferencePairs(nums: number[], k: number): number {
  if (k < 0) return 0;

  const seen = new Map<number, number>();
  let count = 0;

  for (const n of nums) {
    if (k === 0) {
      count += seen.get(n) ?? 0;
    } else {
      count += seen.get(n - k) ?? 0;
      count += seen.get(n + k) ?? 0;
    }
    seen.set(n, (seen.get(n) ?? 0) + 1);
  }

  return count;
}
