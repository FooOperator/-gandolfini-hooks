import { useState } from "react";

/**
 * Creates a controlled toggle that can be set to true or false, or have its current value toggled.
 * @param defaultValue - determines if the toggle starts at false/true
 * @returns the state of the boolean and helper functions
 */
export default function useToggle(defaultValue?: boolean) {
	const [value, setValue] = useState<boolean>(
		() => defaultValue ?? false
	);

	/**
	 * Inverts the current value of the toggle state.
	 */
	const toggle = () => setValue((prev) => !prev);
	/**
	 *	Set the state to true.
	 */
	const setTrue = () => setValue(true);
	/**
	 *	Set the state to false.
	 */
	const setFalse = () => setValue(false);

	return {
		/**
		 * The controlled state of the toggle.
		 */
		value,
		toggle,
		setTrue,
		setFalse
	};
}
