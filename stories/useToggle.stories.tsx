import React, { Meta, Story } from "@storybook/react";
import { useToggle } from "../src";

const BUTTON_CLASSNAME =
	"rounded-md px-3.5 py-1.5 hover:bg-teal-800 ring-1 bg-teal-600 text-white ring-white";

const Template = (args: { defaultValue?: boolean }) => {
	const { value, toggle, setFalse, setTrue } = useToggle(
		args.defaultValue
	);

	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-3xl">Toggle</h1>
			<h2 className="text-center text-2xl">
				Current Value: {JSON.stringify(value)}
			</h2>
			<div className="flex justify-center gap-x-4">
				<button className={BUTTON_CLASSNAME} onClick={setTrue}>
					Set To True
				</button>
				<button className={BUTTON_CLASSNAME} onClick={toggle}>
					Toggle
				</button>
				<button className={BUTTON_CLASSNAME} onClick={setFalse}>
					Set To False
				</button>
			</div>
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
