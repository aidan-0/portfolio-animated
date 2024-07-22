import { useState, useEffect } from "react";

const useViewportWidth = () => {
	const [viewportWidth, setViewportWidth] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setViewportWidth(window.innerWidth);

			const handleResize = () => {
				setViewportWidth(window.innerWidth);
			};

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	// console.log("viewportWidth", viewportWidth);
	return viewportWidth;
};

export default useViewportWidth;
