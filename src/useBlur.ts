export type BlurIntensity = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

/**
 * Based on the [Tailwind's](https://tailwindcss.com/docs/blur) blur values.
 */
export const blurValues: { [key in BlurIntensity]: string } = {
	sm: "4",
	xs: "8",
	md: "12",
	lg: "16",
	xl: "24",
	"2xl": "40",
	"3xl": "64"
};

type BlurValuesKeys = keyof typeof blurValues;
type BlurValues = typeof blurValues[BlurValuesKeys];

/**
 * Get the css snippet `filter: blur(?px)` to apply it to any component.
 * Easiest way to use is to spread the return object onto a component.
 * @param {BlurIntensity} intensity how strong will the blur be
 * @returns props related to the blur that can be spread on a component.
 */
export default function useBlur(intensity: BlurValuesKeys = "md") {
	const cssFragment = `blur(${blurValues[intensity]}px)`;
	return { cssProps: { style: { filter: cssFragment } as Pick<React.CSSProperties, "filter"> } };
}
