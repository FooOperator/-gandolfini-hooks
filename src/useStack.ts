import { useState } from "react";

/**
 * Create a Stack that may take an initial collection. Because it returns the collection as a read-only, it gives you access to array methods and only allows mutations via
 * pop, push and clear.
 *
 *
 * @param items - the collection that will be converted to a stack.
 * @returns the stack itself and helper functions.
 */
export default function useStack<T = unknown>(items?: Array<T>) {
	const [collection, setCollection] = useState<Array<T>>(items ?? []);
	/**
	 *  Pushes a new item into the top of the stack -- Mutates the collection.
	 */
	const push = (item: T) => {
		setCollection(prev => [item, ...prev]);
	};

	/**
	 *  Removes the top item from the stack -- Mutates the collection.
	 * @returns the first item, now removed from the stack.
	 */
	const pop = () => {
		const popped = collection.at(0);
		setCollection(prev => prev.slice(1));
		return popped;
	};

	/**
	 * Allows you to check the top of the stack.
	 * @returns the first item in the stack
	 */
	const peek = () => {
		return collection.at(0);
	};

	/**
	 * Empties the stack.
	 */
	const clear = () => {
		setCollection([]);
	};

	return {
		/**
		 * A read-only collection that is mutated by the helper functions
		 */
		stack: collection as ReadonlyArray<T>,
		push,
		pop,
		peek,
		clear
	};
}