import { useEffect, useState } from "react";
import useToggle from "./useToggle";

/**
 * Allows you to create a numerical range, and check if a numerical value is inside of it (exclusive or inclusive).
 * @param start start of range
 * @param end end of range
 * @param value current value inside range
 * @returns range object and verification functions.
 */
export default function useRange(start: number, end: number) {
	const [range] = useState<{ start: number; end: number }>({
		end,
		start,
	});
	const { value: wrapValue, toggle: toggleWrapValue } = useToggle();
	const [value, setValue] = useState<number>(() => {
		if (end > start) {
			return end / start;
		}

		return start / end;
	});

	const insideRange = (value: number) => {
		return value >= start && value <= end;
	};

	const insideRangeExclusive = (value: number) => {
		return value > start && value < end;
	};

	useEffect(() => {
		if (wrapValue) {
			if (value > end) {
				setValue(end);
			} else if (value < start) {
				setValue(start);
			}
		}

	}, [value, wrapValue]);

	return {
		/**
		 * Object containing the start and end of the range.
		 */
		...range,
		/**
		 * Set the current value to a new value.
		 */
		setValue,
		/**
		 * The state of the value.
		 */
		value,
		/**
		 * If true, whenever the value goes over or under the range boundaries, it's automatically brought back the either limit.
		 */
		wrapValue,
		/**
		 * Toggles the wrap value
		 */
		toggleWrapValue,
		/**
		 * Checks whether the provided value is within range.
		 */
		insideRange,
		/**
		 * Checks whether the provided value is within range and different from the limits.
		 */
		insideRangeExclusive
	};
}
