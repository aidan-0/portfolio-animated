"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./TechStack.css";
import Image from "next/image";
import { techLogosBottom, techLogosTop } from "@/components/data";
import useViewportWidth from "@/components/viewportWidth";

const Page = () => {
	const viewportWidth = useViewportWidth();

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const boxTitle1 = document.getElementById("boxTitle1");
		const boxSubtitle1 = document.getElementById("boxSubtitle1");
		const marqueeContainerTop = document.getElementById("marqueeContainerTop");
		const marqueeContainerBottom = document.getElementById(
			"marqueeContainerBottom",
		);
		const outerHeaderContainer = document.getElementById(
			"outer-header-container",
		);
		const mobileHeader = document.getElementById("mobile-header");

		const mm = gsap.matchMedia();
		const techTl = gsap.timeline();

		// Load in animations
		techTl
			.to(
				"#animation-id",
				{
					opacity: 1,
					duration: 1,
					ease: "power1.inOut",
				},
				0,
			)
			.to(
				"#transition-element",
				{
					zIndex: -10,
				},
				"<",
			);

		// Desktop
		mm.add("(min-width: 768px)", () => {
			if (outerHeaderContainer) {
				techTl
					.fromTo(
						outerHeaderContainer,
						{ y: -150, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 2,
						},
						"<",
					)
					.fromTo(
						boxSubtitle1,
						{ top: "70%", opacity: 0 },
						{ top: "60%", opacity: 1, duration: 2.2, ease: "back" },
						0.2,
					)
					.fromTo(
						marqueeContainerTop,
						{ top: "-8%", opacity: 0 },
						{ top: "-12.5%", opacity: 1, duration: 2.2, ease: "power1.inOut" },
						"<",
					)
					.fromTo(
						marqueeContainerBottom,
						{ top: "10%", opacity: 0 },
						{ top: "17%", opacity: 1, duration: 2.2, ease: "power1.inOut" },
						"<",
					);
			}
		});

		// Mobile
		mm.add("(max-width: 640px)", () => {
			if (mobileHeader) {
				techTl
					.fromTo(
						mobileHeader,
						{ y: -100, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 2,
						},
						0,
					)
					.to(boxTitle1, { top: "30%", opacity: 1, duration: 2.2 }, 0.2)
					.fromTo(
						boxSubtitle1,
						{ top: "75%", opacity: 0 },
						{ top: "60%", opacity: 1, duration: 2.2, ease: "power2.inOut" },
						"<",
					)
					.fromTo(
						marqueeContainerTop,
						{ top: "0%", opacity: 0 },
						{ top: "-7.5%", opacity: 1, duration: 2.2, ease: "power1.inOut" },
						"<",
					)
					.fromTo(
						marqueeContainerBottom,
						{ top: "0%", opacity: 0 },
						{ top: "-2.5%", opacity: 1, duration: 2.2, ease: "power1.inOut" },
						"<",
					);
			}
		});

		// Large mobile
		mm.add("(min-width: 641px) and (max-width: 767px)", () => {
			if (mobileHeader) {
				techTl
					.fromTo(
						mobileHeader,
						{ y: -100, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 2,
						},
						0,
					)
					.to(boxTitle1, { top: "30%", opacity: 1, duration: 2.2 }, 0.2)
					.fromTo(
						boxSubtitle1,
						{ top: "75%", opacity: 0 },
						{ top: "60%", opacity: 1, duration: 2.2, ease: "power2.inOut" },
						"<",
					)
					.fromTo(
						marqueeContainerTop,
						{ top: "0%", opacity: 0 },
						{ top: "-2.5%", opacity: 1, duration: 2.2, ease: "power1.inOut" },
						"<",
					)
					.fromTo(
						marqueeContainerBottom,
						{ top: "0%", opacity: 0 },
						{ top: "-5.5%", opacity: 1, duration: 2.2, ease: "power1.inOut" },
						"<",
					);
			}
		});
	}, [viewportWidth]);

	return (
		<>
			<div id="animation-id">
				<div id="tech" className="z-10">
					<section id="boxSection">
						<div id="boxContainer" className="flex justify-center">
							<h1
								id="boxTitle1"
								className="text-[2.5rem] sm:text-6xl lg:text-7xl 2xl:text-8xl w-full"
							>
								TECH STACK
							</h1>
							<h4
								id="boxSubtitle1"
								className="text-base sm:text-2xl tracking-[1] w-full"
							>
								Here's what I've been working with
							</h4>
							<div className="flex flex-col sm:gap-20 justify-center items-center">
								<div className="marquee w-full" id="marqueeContainerTop">
									<ul className="marquee-content justify-center items-center">
										{techLogosTop.map((logo, index) => (
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
										{techLogosTop.map((logo, index) => (
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
										{techLogosBottom.map((logo, index) => (
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
										{techLogosBottom.map((logo, index) => (
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
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Page;
