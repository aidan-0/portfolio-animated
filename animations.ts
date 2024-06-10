import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationElement = document.getElementById("animation-id");
  const transitionElement = document.getElementById("transition-element");

  if (animationElement) {
    console.log("Animating page out")
    let background;
    let h1text

    // Determine the background color based on the target page
    // TODO: fix the background colors
    // TODO: Add text that comes in with it
    switch (href) {
      case "/resume":
        background = "radial-gradient(circle at top center, #144472 0%, #022241 100%)";
        h1text = "Resume";
        break;
      case "/tech":
        background = "radial-gradient(circle at top center, #0c8c45 0%, #023926 100%)";
        break;
      case "/portfolio":
        background = "radial-gradient(circle at top center, #8d2626 0%, #45071e 100%)";
        break;
      default:
        background = "#333"; // Fallback color
    }

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      }
    });

    // Animate the page content (animationElement)
    tl
    .to("#outer-header-container", {
      y: "-100%",
      duration: 0.4,
    })
    .to(animationElement, {
      scale: 0.7,
      paddingTop: 50,
      filter: "blur(8px)",
      y: -100,
      duration: 1,
    }, +0.3)

    // Animate the transitionElement to bring it back on screen
    if (transitionElement) {
      tl.to(transitionElement, {
        background: background,
        zIndex: 500,
        opacity: 1,
        y: "100%",
        duration: 0,
      }, 0)
      .to(transitionElement, {
        y: 0,
         duration: 1.3,
        ease: "power2.out",
      }, 0.5); // Start at the same time as animationElement
    }
  }
};
