"use client";

import React from "react";
import EntryAnimation from "../../components/ui/EntryAnimation";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const page = () => {
	// SplitText.create("#hero-main-text:nth-child(1)", {type:"chars"})
	gsap.registerPlugin(ScrollTrigger);


	useGSAP(() => {
		const tlHeroSection = gsap.timeline({
			scrollTrigger: {
				trigger: "#home-section1",
				start: "top top",
				end: "+=1500",
				scrub: 1,
				markers: true,
				pin: true,
			},
		});

		tlHeroSection
			.to("#hero-main-text", {
				x: -200,
				y: -200,
				scale: 0.5,
			})
			.to("#hero-sub-text", {
				x: 200,
				y: 200,
				scale: 0.5,
			}, "<")
		})


	
	return (
		<>
			<EntryAnimation />

			{/* Aidan McDonald */}
			<section id="home-section1">
				<div className="h-screen flex flex-col justify-center font-semibold uppercase pt-60 opacity-0" id="aidan-mcdonald-div">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4" id="hero-main-text">
							Aidan<br/>McDonald
						</h1>
						<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]" id="hero-sub-text">
							Developer
						</h2>
				{/* <div className="absolute bottom-[10%] right-[10%]">
					position absolute down arrow
				</div> */}
				</div>
			</section>

			{/* About */}
			<section id="home-section2">
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
							2nd<br/>Section
						</h1>
						<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
							Bottom Text
						</h2>
				</div>
			</section>

			<section>
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
							3rd<br/>Section
						</h1>
						<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
							Bottom Text
						</h2>
				</div>
			</section>
			<section>
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
							4th<br/>Section
						</h1>
						<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
							Bottom Text
						</h2>
				</div>
			</section>
		</>
	);
};

export default page;
