"use client";

import React from "react";
import EntryAnimation from "../../components/ui/EntryAnimation";
// import TechStack from "../../components/TechStack";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import TechStack from "@/components/TechStack/TechStack";
// import Portfolio from "@/components/Portfolio/Portfolio";

const page = () => {
	// useGSAP(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const tlHeroSection = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: "#home-section1",
	// 			start: "top top",
	// 			// end: "+=700",
	// 			end: "100%",
	// 			scrub: 1,
	// 			markers: true,
	// 			pin: true,
	// 			pinSpacing: false,
	// 		},
	// 	});

	// 	//Hero text exit animation
	// 	tlHeroSection
	// 		.fromTo(
	// 			"#hero-main-text",
	// 			{
	// 				y: 0,
	// 			},
	// 			{
	// 				y: -50,
	// 				opacity: 0,
	// 				duration: 1.5,
	// 				stagger: 0.15,
	// 			},
	// 		)
	// 		.fromTo(
	// 			"#nav-link",
	// 			{
	// 				opacity: 1,
	// 				duration: 2,
	// 			},
	// 			{
	// 				opacity: 0,
	// 				duration: 2,
	// 			},
	// 			"<",
	// 		)
	// 		.fromTo(
	// 			"#header-container",
	// 			{
	// 				opacity: 1,
	// 				width: "80%",
	// 				duration: 2,
	// 			},
	// 			{
	// 				duration: 2,
	// 				width: "50%",
	// 				opacity: 0,
	// 			},
	// 			"<",
	// 		)
	// 		.fromTo(
	// 			".mini-bio-text",
	// 			{ y: 0, opacity: 1 },
	// 			{
	// 				y: -30,
	// 				stagger: 0.25,
	// 				opacity: 0,
	// 				duration: 2,
	// 			},
	// 			"<",
	// 		)
	// 		.to("#home-section1", {
	// 			opacity: 0,
	// 			duration: 0,
	// 		});
	// });

	return (
		<>
			<EntryAnimation />

			<div id="animation-id">
				<div
					id="home-section1"
					className="h-screen flex justify-center align-middle items-center z-20"
				>
					<div
						className="h-screen w-screen flex flex-col justify-center tracking-wider font-semibold pt-20 opacity-0 text-text-light"
						id="hero-div-container"
					>
						<span
							className="text-3xl text-center font-[500] pt-24 text-gradient"
							id="hero-main-text"
						>
							Hi, I'm
						</span>
						<span
							className="text-3xl sm:text-8xl text-center"
							id="hero-main-text"
						>
							AIDAN
						</span>
						<span
							className="text-3xl sm:text-8xl text-center pb-36"
							id="hero-main-text"
						>
							MCDONALD
						</span>

						<div
							className="w-[1000px] pl-[10%] text-2xl font-[400] flex flex-col leading-9"
							id="mini-bio-div"
						>
							<span className="mini-bio-text opacity-0">
								A dedicated Web Developer from Perth,
								<br />
							</span>
							<span className="mini-bio-text opacity-0">
								specialising in{" "}
								<span className="italic font-medium text-gradient">
									designing
								</span>{" "}
								and{" "}
								<span className="italic font-medium text-gradient">
									developing
								</span>{" "}
								<br />
							</span>
							<span className="mini-bio-text opacity-0">
								advanced client solutions.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
