import React, { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { useRange } from "../src";

const Template = (args: { start: number; end: number }) => {
	const { end, start, value, setValue, toggleWrapValue, wrapValue } =
		useRange(args.start, args.end);
	return (
		<div>
			<h1 className="text-3xl">Range</h1>
			<div className="flex flex-col items-center">
				<div className="flex items-center gap-7">
					<div className="flex flex-col items-center">
						<span>start</span>
						<span>{start}</span>
					</div>
					<div className="flex flex-col items-center">
						<h2>Current Value</h2>
						<span>{value}</span>
					</div>
					<div className="flex flex-col items-center">
						<span>end</span>
						<span>{end}</span>
					</div>
				</div>
				<input
					id="test-val"
					type="range"
					min={args.start - 20}
					max={args.end + 20}
					onChange={(e) => setValue(+e.target.value)}
					value={value}
				/>
			</div>
			<label className="flex gap-2 select-none" htmlFor="wrap">
				<input
					type="checkbox"
					id="wrap"
					checked={wrapValue}
					onChange={toggleWrapValue}
				/>
				Wrap Value
			</label>
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
