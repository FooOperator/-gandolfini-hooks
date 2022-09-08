import { useEffect, useState } from "react";

interface UseDebounceOptions {
	/**
	 * @property if true, as soon as the hook is available, it will initiate the debounce functionality.
	 */
	startActive?: boolean;
}
/**
 * Allows you to create a range, and check if a numerical value is inside of it (exclusive or inclusive).
 * @param delay - how long it takes between each interval
 * @param callback - the function that will be called at every interval's end
 * @param {UseDebounceOptions} options - extra options
 * @returns ability to deactivate/activate interval as well as the state indicating if the debounce is active or not.
 */
export default function useDebounce(delay: number, callback: (...args: unknown[]) => void, options?: UseDebounceOptions) {
	const [active, setActive] = useState<boolean>(options?.startActive ?? true);
	const [timer, setTimer] = useState<NodeJS.Timeout>();

	/**
	 *  Allows you to toggle the debounce. If you turn it off, it cancels the current interval.
	 *
	 */
	const toggleActive = () => setActive(prev => !prev);

	useEffect(() => {
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (!active) {
			clearInterval(timer);
		} else {
			setTimer(setInterval(() => callback(), delay));
		}
	}, [active]);

	return { active, toggleActive };
}