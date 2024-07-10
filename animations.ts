import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationElement = document.getElementById("animation-id");
  const transitionElement = document.getElementById("transition-element");
  const transitionText = document.getElementById("page-transition-text");

  if (animationElement && transitionText) {
    console.log("Animating page out");
    let background;
    let h1text;

    // Determine the background color and text based on the target page
    switch (href) {
      // case "/resume":
      //   background = "radial-gradient(circle at top center, #144472 0%, #022241 100%)";
      //   h1text = "RESUME";
      //   break;
      case "/tech":
        background = "radial-gradient(circle at top center, #0c8c45 0%, #023926 100%)";
        h1text = "TECH STACK";
        break;
      case "/portfolio":
        background = "radial-gradient(circle at top center, #8d2626 0%, #45071e 100%)";
        h1text = "PORTFOLIO";
        break;
      default:
        background = "#000";
        h1text = " "; 
    }


// CHANGING TO TECH FROM PORTFOLIO. PORTFOLIO FLIES DOWN INSTEAD OF UP

    // Set the h1 text content
    transitionText.innerText = h1text;

    const tl = gsap.timeline({});

    // Animate the page content (animationElement)
    let mm = gsap.matchMedia();
    // Desktop header animate out
		mm.add("(min-width: 768px)", () => {
      tl.to("#outer-header-container", {
        y: "-100%",
        duration: 0.4,
      })
    })

    // Desktop header animate out
		mm.add("(max-width: 767px)", () => {
      tl.to("#mobile-header", {
        y: "-100%",
        duration: 0.4,
      })
    })


    tl.to(animationElement, {
      height: "100vh",
      duration: 0.2,
    }, 0)
    .to(animationElement, {
      scale: 0.8,
      filter: "blur(8px)",
      borderRadius: "50px",
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
        ease: "power1",
      }, 0.5) // Start around the same time as animationElement to make it flow
      .fromTo(transitionText, {
        opacity: 0,
        // y: -250,
      }, {
        // y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power1.in",
        
      }, 0.9) // Adds up to 1.8s to match the swipe in time
      .to(transitionText, {
        onComplete: () => {
          router.push(href);
        }
      }, 1.3);
    }
  }
};
