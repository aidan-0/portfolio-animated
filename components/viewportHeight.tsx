import { useState, useEffect } from "react";

const useViewportHeight = () => {
	const [viewportHeight, setViewportHeight] = useState<number>(
		typeof window !== "undefined" ? window.innerHeight : 0,
	);

	useEffect(() => {
		const handleResize = () => {
			setViewportHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// console.log("viewportHeight", viewportHeight);
	return viewportHeight;
};

export default useViewportHeight;
