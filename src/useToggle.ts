import { useState } from "react";

export default function useToggle(defaultValue?: boolean) {
	const [value, setValue] = useState<boolean>(
		() => defaultValue ?? false
	);

	const toggle = () => setValue((prev) => !prev);
	const setTrue = () => setValue(true);
	const setFalse = () => setValue(false);

	return { value, toggle, setTrue, setFalse };
}
