import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { useStack } from "../src";

const Template = ({ collection }: { collection?: unknown[] }) => {
	const { stack, push, clear, peek, pop } =
		useStack<unknown>(collection);
	const [lastRemoved, setLastRemoved] = useState<unknown>();
	const [valueToBePushed, setValueToBePushed] = useState<string>();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		push(valueToBePushed);
		setValueToBePushed("");
	};

	return (
		<div className="flex flex-col gap-1">
			<h1 className="text-3xl">Stack</h1>
			<h2 className="text-2xl">Length: {stack.length}</h2>
			<p className="text-lg">
				The <span className="text-red-500 font-medium">red</span>{" "}
				item will be popped
			</p>
			<ul className="grid grid-cols-6 gap-x-2 gap-y-2.5">
				{stack.map((item, index) => (
					<li
						className={`py-1 px-2 text-center text-md font-medium ${
							index === 0 ? "text-red-500" : "text-white"
						} bg-slate-900`}
						key={index}>
						{JSON.stringify(item)}
					</li>
				))}
			</ul>
			<div className="flex justify-center gap-x-4">
				<p>
					Last Removed:{" "}
					{JSON.stringify(lastRemoved) ?? <strong>none</strong>}
				</p>
				<p>
					First of stack:{" "}
					{JSON.stringify(peek()) ?? <strong>none</strong>}
				</p>
			</div>
			<div className="flex flex-col items-center gap-y-2">
				<input
					className="rounded-md text-lg bg-slate-900 text-white  text-center"
					type="text"
					form="form"
					value={valueToBePushed}
					placeholder={"Type a value and enter..."}
					onChange={(e) => setValueToBePushed(e.target.value)}
				/>
				<div className="flex w-full justify-evenly">
					<button onClick={() => setLastRemoved(pop())}>
						Pop
					</button>
					<button form="form">Push</button>
					<button onClick={() => clear()}>Clear</button>
				</div>
				<form id="form" onSubmit={handleSubmit}></form>
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
