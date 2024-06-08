// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// export const headerTimeline = gsap.timeline();

// export const HeaderTimeline = () => {
// 	useGSAP(() => {
// 		console.log("Starting Header Animation");

// 		headerTimeline
// 			.to("#outer-container", {
// 				opacity: 1,
// 				duration: 1,
// 				ease: "power1.inOut",
// 			})
// 			.from(
// 				"#header-container",
// 				{
// 					duration: 1,
// 					width: "70px",
// 					alignContent: "center",
// 				},
// 				"<",
// 			)
// 			.from(
// 				"#nav-link",
// 				{
// 					opacity: 0,
// 					delay: 0.2,
// 					duration: 1.5,
// 				},
// 				"<",
// 			);
//             return headerTimeline;
// 	}, []);

//     return null;
// };
