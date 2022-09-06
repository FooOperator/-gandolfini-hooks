import { useEffect, useState } from "react";


export default function useStack<T = any>(items?: Array<T>) {
  const [collection, setCollection] = useState<Array<T>>(items ?? []);

  const push = (item: T) => {
    setCollection(prev => [item, ...prev]);
  }

  const pop = () => {
    const popped = collection.at(0);
    setCollection(prev => collection.slice(1));
    return popped;
  }

  const peek = () => {
    return collection.at(0);
  }

  const clear = () => {
    setCollection([]);
  }

  return { stack: collection as ReadonlyArray<T>, push, pop, peek, clear };
}