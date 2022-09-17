import React, { Meta, Story } from "@storybook/react";
import useDebounce from "../src/useDebounce";
import useToggle from "../src/useToggle";

const Template = ({ startActive }: { startActive?: boolean }) => {
	const { value, toggle } = useToggle();

	const debounceFunc = () => {
		toggle();
		console.log("debounce called");
	};

	const { active, toggleActive } = useDebounce(1500, debounceFunc, {
		startActive,
	});

	return (
		<div className="flex flex-col w-full text-md gap-1">
			<h1 className="text-3xl">Debounce</h1>
			<h2 className="text-2xl">
				Current Value: {JSON.stringify(value)}
			</h2>
			<h3 className="text-xl">
				Is Debounce Active: {JSON.stringify(active)}
			</h3>
			<h4 className="text-lg">
				Every 1.5 seconds, the value will be toggled.
			</h4>
			<div className="mt-4">
				<button
					className="p-1 rounded-md ring-1 ring-blue-600 hover:bg-blue-600 hover:text-gray-900 text-sm bg-blue-400 text-gray-800 font-medium"
					onClick={() => toggleActive()}>
					Toggle Debounce
				</button>
			</div>
		</div>
	);
};

export const Default: Story = () => <Template />;
export const StartInactive: Story = () => <Template startActive={false} />;

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Logic/useDebounce",
	component: Template,
} as Meta;
