import React, { Meta, Story } from "@storybook/react";
import { useToggle } from "../src";

const Template = (args: { defaultValue?: boolean }) => {
	const { value, toggle, setFalse, setTrue } = useToggle(
		args.defaultValue
	);

	return (
		<div>
			<h2>Current Value: {JSON.stringify(value)}</h2>
			<button onClick={toggle}>Toggle</button>
			<button onClick={setTrue}>Set To True</button>
			<button onClick={setFalse}>Set To False</button>
		</div>
	);
};

export const Default: Story = () => <Template />;
export const StartsTrue: Story = () => <Template defaultValue={true} />;
export const StartsFalse: Story = () => <Template defaultValue={false} />;

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Logic/useToggle",
	component: Template,
} as Meta;
