// import gsap from "gsap";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// export const animatePageOut = (href: string, router: AppRouterInstance) => {
//   const animationElement = document.getElementById("animation-id");
//   const transitionElement = document.getElementById("transition-element");

//   if (animationElement) {
//     let background;

//     // Determine the background color based on the target page
//     switch (href) {
//       case "/":
//         background = "radial-gradient(circle at top center, #144472 0%, #022241 100%)";
//         break;
//       case "/tech":
//         background = "radial-gradient(circle at top center, #b76f3f 0%, #9a3514 100%)";
//         break;
//       case "/work":
//         background = "radial-gradient(circle at top center, #8d2626 0%, #45071e 100%)";
//         break;
//       default:
//         background = "#333"; // Fallback color
//     }

//     // Create a GSAP timeline to coordinate animations
//     const tl = gsap.timeline({
//       onComplete: () => {
//         // Change the route after the animation is complete
//         router.push(href);
//       }
//     });

//     // Animate the page content (animationElement)
//     tl.to(animationElement, {
//       scale: 0.8,
//       paddingTop: 50,
//       filter: "blur(5px)",
//       y: -100,
//       duration: 1,
//     })
//     .to("#homeh1", {
//       y: -50,
//       duration: 0.5,
//     }, "<")
//     .to("#transition-link-btn", {
//       x: 100,
//       duration: 0.5,
//     }, "<")

//     // Animate the transitionElement to bring it back on screen
//     if (transitionElement) {
//       tl.to(transitionElement, {
//         background: background,
//       }, 0)
//       .to(transitionElement, {
//         y: 0, // Bring it to the original position
//         zIndex: 100, // Make sure it's on top
//         duration: 1.5,
//         ease: "power4.out",
//         // background: background,
//       }, 0.4); // Start at the same time as animationElement
//     }
//   }
// };
