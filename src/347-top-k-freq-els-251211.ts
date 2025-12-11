function topKFrequent(nums: number[], k: number): number[] {
  const countsByValue = new Map<number, number>();
  const valuesByCount = new Map<number, number[]>();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (!countsByValue.has(value)) {
      countsByValue.set(value, 0);
    }
    const updatedCount = countsByValue.get(value)! + 1;
    countsByValue.set(value, updatedCount);

    if (!valuesByCount.has(updatedCount)) {
      valuesByCount.set(updatedCount, [value]);
    } else {
      valuesByCount.get(updatedCount)!.push(value);
    }
  }

  const valueArrays = Array.from(valuesByCount.values());
  let highestNums = new Set<number>();
  for (let i = valueArrays.length - 1; i > -1; i--) {
    const valueArray = valueArrays[i];
    for (let j = 0; j < valueArray.length; j++) {
      highestNums.add(valueArray[j]);
      if (highestNums.size === k) {
        return Array.from(highestNums.values());
      }
    }
  }
  return [];
}

const test1 = topKFrequent([1, 1, 1, 2, 2, 3], 2);
const test2 = topKFrequent([1], 1);
const test3 = topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2);

console.log({ test1, test2, test3 });
