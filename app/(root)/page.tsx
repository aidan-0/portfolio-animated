"use client";

import React from "react";
import EntryAnimation from "../../components/ui/EntryAnimation";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const page = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

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

		//Hero text exit animation
		tlHeroSection
			.to("#hero-main-text", {
				fontSize: "1rem",
			})
			.to(
				"#hero-sub-text",
				{
					fontSize: "1rem",
				},
				"<"
			)
			.to("#hidden-intro-text", {
				opacity: 1,
				display: "block",
			}, "<")
			.fromTo(
				"#nav-link",
				{
					opacity: 1,
				},
				{
					opacity: 0,
					// duration: 4,
				},
				"<",
			)
			.fromTo(
				"#header-container",
				{
					opacity: 1,
					width: "80%",
				},
				{
					// duration: 4,
					width: "50%",
					opacity: 0,
					// delay: 0,
				},
				"<",
			);

	});

	return (
		<>
			<EntryAnimation />

			{/* Aidan McDonald */}
			<section id="home-section1">
				<div
					className="h-screen flex flex-col justify-center font-semibold uppercase pt-60 opacity-0"
					id="aidan-mcdonald-div"
				>
					<span className="opacity-0 hidden" id="hidden-intro-text">
						Hi, I'm
					</span>
					<span
						className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4"
						id="hero-main-text"
					>
						Aidan
						<br />
						McDonald
					</span>
					<span className="opacity-0 hidden" id="hidden-intro-text">
						a skilled web {" "}
					</span>
					<span
						className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]"
						id="hero-sub-text"
					>
						Developer
					</span>
					<span className="opacity-0 hidden" id="hidden-intro-text">
						I'm currently seeking opportunities where I can bring my unique
						blend of technical skills and creative vision to develop innovative
						web solutions that drive business success.{" "}
					</span>

					{/* <div className="absolute bottom-[10%] right-[10%]">
					position absolute down arrow
				</div> */}
				</div>
			</section>

			{/* About */}
			<section id="home-section2">
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
					<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
						2nd
						<br />
						Section
					</h1>
					<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
						Bottom Text
					</h2>
				</div>
			</section>

			<section id="home-section3">
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
					<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
						3rd
						<br />
						Section
					</h1>
					<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
						Bottom Text
					</h2>
				</div>
			</section>
			<section id="home-section4">
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
					<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
						4th
						<br />
						Section
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
