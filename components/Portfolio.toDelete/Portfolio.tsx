// import React from "react";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
// import { useGSAP } from "@gsap/react";
// import "./Portfolio.css";


// const Portfolio = () => {

//     useGSAP(() => {
//         gsap.registerPlugin(ScrollTrigger); 
         
//         const tlPortfolioBackground = gsap.timeline({
//             scrollTrigger: {
//               trigger: "#portfolio",
//               start: "top top",
//               end: "+=2000px",
//               markers: true,
//               scrub: 1,
//               pin: true,
//             },
//             defaults: { ease: "none" }
//           });



//         tlPortfolioBackground
//         .to("body", {
//             background: "#7c1e24",
//         })
//         // Red
//         .to("#portfolio", {
//             background: "radial-gradient(circle at bottom center, #8d2626 0%, #45071e 100%"
//         })
//         // Orange
//         .to("#portfolio", {
//             background: "radial-gradient(circle at bottom center, rgba(200,113,55,1) 0%, rgba(154,53,20,1) 100%)",
//             duration: 4,
//         })
//         .to("#portfolio-header", {
//             color: "#151B20",
//             duration: 3,
//         }, "<")
//         .to("#portfolio-sub-header", {
//             color: "#151B20",
//             duration: 3,
//         }, "<")




//     });


// 	return (
// 		<div>
//             {/* swipe to orange on animation */}
// 			<section id="portfolio">
// 				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
// 					<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4"
//                     id="portfolio-header">
//                         Portfolio
// 					</h1>
// 					<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-text-light"
//                     id="portfolio-sub-header">
// 						Bottom Text
// 					</h2>
// 				</div>
// 			</section>
// 		</div>
// 	);
// };

// export default Portfolio;
