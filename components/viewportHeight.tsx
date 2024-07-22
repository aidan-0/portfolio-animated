import { useState, useEffect } from "react";

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0,
  );
  const [initialWindowWidth, setInitialWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        if (newWidth !== initialWindowWidth) {
          setViewportHeight(window.innerHeight);
          setInitialWindowWidth(newWidth); // Update initial width after change
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [initialWindowWidth]);

  return viewportHeight;
};

export default useViewportHeight;
