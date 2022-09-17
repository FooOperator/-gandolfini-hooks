import React, { Meta, Story } from "@storybook/react";
import { BlurIntensity, useBlur } from "../src";

const IMG_CLASSNAME = "h-44 w-44";
const DIV_CLASSNAME = "flex flex-col  text-cente break-word";
const Template = ({ intensity }: { intensity: BlurIntensity }) => {
	const { cssProps } = useBlur(intensity);

	const ImageWithStylesAttribute = () => (
		<img
			className={IMG_CLASSNAME}
			style={{
				filter: cssProps.style.filter,
			}}
			src="https://images.unsplash.com/photo-1532993680872-98b088e2cacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
			alt="road beneath a forest"
		/>
	);

	const Image = () => (
		<img
			{...cssProps}
			className={IMG_CLASSNAME}
			src="https://images.unsplash.com/photo-1532993680872-98b088e2cacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
			alt="road beneath a forest"
		/>
	);

	return (
		<div className="flex flex-col w-full  p-4">
			<h1 className="text-3xl">Blur</h1>
			<p className="text-center text-lg">Both Approaches Work!</p>
			<div className="flex justify-around mt-4">
				<div className={DIV_CLASSNAME}>
					<p>
						Attribute <code>cssProps.style.filter</code> to{" "}
						<code>Component.style.filter</code>
					</p>
					<ImageWithStylesAttribute />
				</div>
				<div className={DIV_CLASSNAME}>
					<p>
						Spread <code>cssProps</code>
						{"\n"} into <code>Component</code>
					</p>
					<Image />
				</div>
			</div>
		</div>
	);
};

export const DefaultOrMD: Story = () => <Template intensity="md" />;
export const XS: Story = () => <Template intensity="xs" />;
export const _2XS: Story = () => <Template intensity="2xs" />;
export const _3XS: Story = () => <Template intensity="3xs" />;
export const SM: Story = () => <Template intensity="sm" />;
export const LG: Story = () => <Template intensity="lg" />;
export const XL: Story = () => <Template intensity="xl" />;
export const _2XL: Story = () => <Template intensity="2xl" />;
export const _3XL: Story = () => <Template intensity="3xl" />;

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "UI/useBlur",
	component: Template,
} as Meta;
