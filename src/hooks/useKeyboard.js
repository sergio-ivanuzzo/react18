import { useEffect, useRef } from "react";

const useKeyboard = (keyActionMap) => {
	const ref = useRef();
	useEffect(() => {
		const rootListener = (e) => {
			e.stopPropagation();
			const key = e.key.trim() || e.code.trim();

			if (key in keyActionMap) {
				e.preventDefault();
				keyActionMap[key](e);
			}
		};

		document.addEventListener("keydown", rootListener);
		return () => document.removeEventListener("keydown", rootListener);
	}, []);

	return ref;
};

export default useKeyboard;
