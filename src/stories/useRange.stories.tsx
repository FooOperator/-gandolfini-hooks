import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import useRange from "../useRange";

const Template = (args: { start: number; end: number }) => {
	const { end, start, insideRange, insideRangeExclusive } = useRange(
		args.start,
		args.end
	);
	const [testValue, setTestValue] = useState<number>(0);

	return (
		<div>
			<p>
				<span>start: {start}</span>
			</p>
			<p>
				<span>end: {end}</span>
			</p>
			<label htmlFor="test-val">Set your value</label>
			<input
				id="test-val"
				type="number"
				onChange={(e) => setTestValue(+e.target.value)}
				value={testValue}
			/>
			<p>
				<span>
					in range inclusive:{" "}
					{JSON.stringify(insideRange(testValue))}
				</span>
			</p>
			<p>
				<span>
					in range exclusive:{" "}
					{JSON.stringify(insideRangeExclusive(testValue))}
				</span>
			</p>
		</div>
	);
};

export const Default: Story = () => <Template start={0} end={100} />;

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Logic/useRange",
	component: Template,
} as Meta;
