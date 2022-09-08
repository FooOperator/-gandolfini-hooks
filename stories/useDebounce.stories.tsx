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
		<div>
			<h2>Current Value: {JSON.stringify(value)}</h2>
			<h3>Is Debounce Active: {JSON.stringify(active)}</h3>
			<button onClick={() => toggleActive()}>Toggle Debounce</button>
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
