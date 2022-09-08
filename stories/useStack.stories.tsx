import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { useStack } from "../src";

const Template = ({ collection }: { collection?: unknown[] }) => {
	const { stack, push, clear, peek, pop } =
		useStack<unknown>(collection);
	const [lastRemoved, setLastRemoved] = useState<unknown>();
	const [valueToBePushed, setValueToBePushed] = useState<string>();

	return (
		<div>
			<h1>Stack</h1>
			<h2>Length: {stack.length}</h2>
			<ul>
				{stack.map((item, index) => (
					<li key={index}>{JSON.stringify(item)}</li>
				))}
			</ul>
			<h3>
				Last Removed:{" "}
				{JSON.stringify(lastRemoved) ?? <strong>none</strong>}
			</h3>
			<h3>
				First of stack:{" "}
				{JSON.stringify(peek()) ?? <strong>none</strong>}
			</h3>
			<div>
				<input
					type="text"
					value={valueToBePushed}
					onChange={(e) => setValueToBePushed(e.target.value)}
				/>
				<button onClick={() => push(valueToBePushed)}>Push</button>
				<button onClick={() => setLastRemoved(pop())}>Pop</button>
				<button onClick={() => clear()}>Clear</button>
			</div>
		</div>
	);
};

export const Default: Story = () => <Template />;
export const InitializedWithCollection: Story = () => (
	<Template collection={["Elijah", "Craig", "Perry", "Noah"]} />
);

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Logic/useStack",
	component: Template,
} as Meta;
