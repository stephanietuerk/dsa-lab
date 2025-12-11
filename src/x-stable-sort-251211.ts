function stableSort<T>(items: T[], getSortValue: (item: T) => string | number) {
  if (items.length < 2) {
    return items;
  }

  const itemsBySortValue = new Map<string | number, T[]>();

  for (let i = 0; i < items.length; i++) {
    const sortValue = getSortValue(items[i]);
    if (!itemsBySortValue.has(sortValue)) {
      itemsBySortValue.set(sortValue, []);
    }
    itemsBySortValue.get(sortValue)?.push(items[i]);
  }

  const values = Array.from(itemsBySortValue.keys());

  let sortedValues = [values[0]];
  for (let i = 1; i < values.length; i++) {
    const value = values[i];
    let hasInserted = false;
    for (let j = 0; j < sortedValues.length; j++) {
      if (value < sortedValues[j]) {
        sortedValues.splice(j, 0, value);
        hasInserted = true;
        break;
      }
    }
    if (!hasInserted) {
      sortedValues.push(value);
    }
  }

  const sortedItems = [];
  for (let i = 0; i < sortedValues.length; i++) {
    const itemsForValue = itemsBySortValue.get(sortedValues[i])!;
    for (const item of itemsForValue) {
      sortedItems.push(item);
    }
  }

  return sortedItems;
}

interface Fruit {
  name: string;
  price: number;
}

const testItems: Fruit[] = [
  { name: "Apple", price: 2.5 },
  { name: "Banana", price: 1.0 },
  { name: "Coconut", price: 1.5 },
  { name: "Durian", price: 2.0 },
  { name: "Elderberries", price: 2.5 },
  { name: "Fig", price: 3.0 },
  { name: "Grapes", price: 1.5 },
];
const sorted = stableSort(testItems, (item: Fruit) => item.price);

console.log(sorted);
