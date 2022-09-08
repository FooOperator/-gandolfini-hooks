import { useState } from "react";

/**
 * Allows you to create a range, and check if a numerical value is inside of it (exclusive or inclusive).
 * @param start
 * @param end
 * @returns range object and verification functions.
 */
export default function useRange(start: number, end: number) {
	const [range] = useState<{ start: number; end: number }>({
		end,
		start,
	});

	const insideRange = (value: number) => {
		return value >= start && value <= end;
	};

	const insideRangeExclusive = (value: number) => {
		return value > start && value < end;
	};

	return { ...range, insideRange, insideRangeExclusive };
}
