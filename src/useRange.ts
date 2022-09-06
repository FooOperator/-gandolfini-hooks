import { useState } from "react";

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
