import React, { Meta, Story } from "@storybook/react";
import { BlurIntensity, useBlur } from "../src";

const Template = ({ intensity }: { intensity: BlurIntensity }) => {
	const { cssProps } = useBlur(intensity);

	const ImageWithStylesAttribute = () => (
		<img
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
			src="https://images.unsplash.com/photo-1532993680872-98b088e2cacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
			alt="road beneath a forest"
		/>
	);

	return (
		<div>
			<ImageWithStylesAttribute />
			<Image />
		</div>
	);
};

export const DefaultOrMD: Story = () => <Template intensity="md" />;
export const SM: Story = () => <Template intensity="sm" />;
export const XS: Story = () => <Template intensity="xs" />;
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
