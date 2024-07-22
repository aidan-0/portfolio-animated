import { useState, useEffect } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  const [initialWindowWidth, setInitialWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        if (newWidth !== initialWindowWidth) {
          setViewportWidth(newWidth);
          setInitialWindowWidth(newWidth); // Update initial width after change
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [initialWindowWidth]);

  return viewportWidth;
};

export default useViewportWidth;
