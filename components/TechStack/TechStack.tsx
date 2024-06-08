"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./TechStack.css";
import Image from "next/image";
import { techLogos } from "../data";

const TechStack = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		let boxSection = document.getElementById("boxSection");
		let boxTitle1 = document.getElementById("boxTitle1");
		let boxSubtitle1 = document.getElementById("boxSubtitle1");
		let boxContainer = document.getElementById("boxContainer");
		let marqueeContainerTop = document.getElementById("marqueeContainerTop");
		let marqueeContainerBottom = document.getElementById("marqueeContainerBottom");
		let TechStackLogo = document.getElementById("TechStackLogo");
		let tech = document.getElementById("tech");

		gsap.set(boxTitle1, {
			color: "#FFFFFF",
			top: "20%",
			left: "50%",
			position: "absolute",
			overflow: "hidden",
			width: "100%",
			opacity: 0,
		});

		gsap.set(boxContainer, {
			marginLeft: "auto",
			marginRight: "auto",
			borderRadius: "0px",
			width: "100vw",
			height: "100vh",
			boxShadow: "1px 1px 1px #999, 2px 2px 2px #999, 3px 3px 3px #999, 4px 4px 4px #999, 5px 5px 5px #AAA, 6px 6px 6px #AAA, 7px 7px 7px #CCC"
		});


		gsap.set(marqueeContainerTop, {
			opacity: 0,
			y: "30vh"
		});
		gsap.set(marqueeContainerBottom, {
			opacity: 0,
			y: "-30vh"
		});


		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: tech,
				start: "top top",
				end: "+=3500px",
				markers: true,
				scrub: 1,
				pin: tech,
				pinSpacing: true,
				invalidateOnRefresh: true,
			},
			defaults: { ease: "none" },
		});


		tl1
			.to(
				boxTitle1,
				{ opacity: 1, top: "25%", left: "50%", duration: 5, color: "#FFFFFF" }
			)
			.to(boxContainer, {
				duration: 8,
				width: "80vw",
				height: "80vh",
				marginTop: "10vh",
				borderRadius: "50px",
				overflow: "hidden",
			})
			// Box is pinned
			.to(
				boxTitle1,
				{
					fontWeight: "600",
					duration: 8,
					position: "absolute",
					top: "28%",
					left: "40%",
				},
				"<",
			)
			.to(
				boxSubtitle1,
				{
					position: "absolute",
					bottom: "35%",
					right: "40%",
					fontWeight: 400,
					color: "#FFFFFF",
					width: "100%",
				},
				"<",
			)

			// Text move up and down
			.to(boxSubtitle1, { opacity: 1, duration: 4, color: "#E1EAF1" })
			.to(
				boxContainer,
				{
					duration: 4,
					background:
						"radial-gradient(circle at top center, #8D2626 0%, #45071E 100%)",
				},
				"<",
			)
			.to(marqueeContainerTop, { duration: 8, opacity: 1, y: "38vh" }, "<+=1")
			.to(marqueeContainerBottom, { duration: 8, opacity: 1, y: "-38vh" }, "<")

			// text move left and right
			.to(boxTitle1, { duration: 15, xPercent: -25 }, "<")
			.to(boxSubtitle1, { duration: 15, xPercent: 25}, "<")

			// Box expands
			.to(boxContainer, {
				duration: 6,
				width: "100vw",
				height: "100vh",
				borderRadius: 0,
				marginTop: 0,
				boxShadow: "1px 1px 1px #ffffff00, 2px 2px 2px #ffffff00, 3px 3px 3px #ffffff00, 4px 4px 4px #ffffff00, 5px 5px 5px #ffffff00, 6px 6px 6px #ffffff00, 7px 7px 7px #ffffff00"
				})
				.to(marqueeContainerTop, { duration: 6, opacity: 1, y: "42vh" }, "<")
			.to(marqueeContainerBottom, { duration: 6, opacity: 1, y: "-42vh" }, "<")

			.to(boxTitle1, { duration: 4, xPercent: -25 })


		gsap.set(tech, {
			y: -1000,
		});
	});

	return (
		<>
			<div id="tech" className="z-10">
				<section id="boxSection">
					<div
						id="boxContainer"
						className="flex justify-center overflow-hidden"
					>
						<h3 id="boxTitle1" className="lg:text-7xl  2xl:text-8xl">TECH STACK</h3>
						<div
							className="flex flex-col gap-20 justify-center items-center"

						>
							<div className="marquee w-full" id="marqueeContainerTop">
								<ul className="marquee-content justify-center items-center">
									{techLogos.map((logo, index) => (
										<li key={index}>
											<Image
												src={logo.src}
												alt={logo.alt}
												width={50}
												height={50}
												className="tech-logo"
											/>
										</li>
									))}
								</ul>

								<ul
									aria-hidden="true"
									className="marquee-content justify-center items-center"
								>
									{techLogos.map((logo, index) => (
										<li key={index}>
											<Image
												src={logo.src}
												alt={logo.alt}
												width={50}
												height={50}
												className="tech-logo"
											/>
										</li>
									))}
								</ul>
							</div>
							<div className="marquee w-full" id="marqueeContainerBottom">
								<ul className="marquee-content marquee-reverse justify-center items-center">
									{techLogos.map((logo, index) => (
										<li key={index}>
											<Image
												src={logo.src}
												alt={logo.alt}
												width={50}
												height={50}
												className="tech-logo"
											/>
										</li>
									))}
								</ul>
								<ul
									aria-hidden="true"
									className="marquee-content marquee-reverse justify-center items-center"
								>
									{techLogos.map((logo, index) => (
										<li key={index}>
											<Image
												src={logo.src}
												alt={logo.alt}
												width={50}
												height={50}
												className="tech-logo"
											/>
										</li>
									))}
								</ul>
							</div>
						</div>
						<h4 id="boxSubtitle1" className="tracking-[1]">
							Here's what i've been working with
						</h4>
					</div>
				</section>
			</div>
		</>
	);
};

export default TechStack;
