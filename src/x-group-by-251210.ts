function groupBy<T, K extends string | number>(
  items: T[],
  getKey: (item: T, index: number) => K
): Record<K, T[]> {
  const grouped: Record<K, T[]> = {} as Record<K, T[]>;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const key = getKey(item, i);
    if (!Object.hasOwn(grouped, key)) {
      grouped[key] = [item];
    } else {
      grouped[key].push(item);
    }
  }
  return grouped;
}

interface State {
  id: string;
  name: string;
}

const items1: State[] = [
  { id: "AL", name: "Alabama" },
  { id: "AK", name: "Alaska" },
  { id: "AZ", name: "Arizona" },
  { id: "AR", name: "Arkansas" },
  { id: "CA", name: "California" },
  { id: "CO", name: "Colorado" },
  { id: "CT", name: "Connecticut" },
  { id: "DE", name: "Delaware" },
  { id: "FL", name: "Florida" },
  { id: "GA", name: "Georgia" },
];

const test1 = groupBy(items1, (item: State, index: number) =>
  ["a", "e", "i", "o", "u"].includes(item.id[1].toLowerCase())
    ? "endsWithVowel"
    : "endsWithConsonant"
);

console.log({ test1 });
