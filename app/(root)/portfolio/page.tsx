"use client";

import React from "react";
import Image from "next/image";
import "./Portfolio.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaterialSymbolsCircle } from "../../../components/ui/Icons";

const page = () => {
	// on page load
	useGSAP(() => {
		const portfolioTl = gsap.timeline();

		portfolioTl
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
					zIndex: 0,
				},
				"<",
			)
			.fromTo(
				"#outer-header-container",
				{ y: -150, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1.5,
				},
				"<",
			)
			.fromTo(
				"#mini-bio-div",
				{ top: "85%", opacity: 0 },
				{ top: "75%", opacity: 1, duration: 1.5, ease: "back" },
				"<",
			)
			.to(
				"*",
				{
					overflow: "initial",
				},
				"<",
			);
	}, []);

	// on scroll
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tlPortfolio = gsap.timeline({
			scrollTrigger: {
				trigger: "#portfolio-bg",
				start: "top top",
				end: "+=5000",
				scrub: 1,
				markers: true,
				pin: true,
				// pinSpacing: false,
			},
		});

		tlPortfolio
			.to("#portfolio-bg", {
				background:
					"radial-gradient(circle at top center, #b76f3f 0%, #9a3514 100%)",
				duration: 30,
			})
			.to(
				"#page-transition-text",
				{
					top: "10%",
					duration: 8,
				},
				"<",
			)
			.fromTo(
				"#outer-header-container",
				{
					y: 0,
				},
				{
					y: -150,
					duration: 5,
				},
				"<",
			)
			.fromTo(
				"#mini-bio-div",
				{
					top: "75%",
					opacity: 1,
				},
				{
					top: "85%",
					opacity: 0,
					duration: 3,
				},
				"<",
			)
			.fromTo(
				"#view-projects-text",
				{
					opacity: 0,
					y: 40,
				},
				{
					opacity: 1,
					y: 0,
					duration: 3,
				},
				+5,
			)
			.fromTo(
				"#project-display",
				{
					opacity: 0,
					y: 70,
				},
				{
					y: 0,
					opacity: 1,
					duration: 5,
					ease: "power2",
				},
				"<",
			)
			.fromTo(
				".project-selection-btn",
				{
					x: -150,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					duration: 3,
					stagger: 0.6,
				},
				"<",
			);
	});

	// Add hover effect to #project-screen
	function handleMouseEnter(e: any) {
		if (e.target.id === "project-screen") {
			gsap.fromTo(
				`#project-screen`,
				{
					background:
						"radial-gradient(circle at bottom right, #242630e8 0%, #242630e8 100%)",
				},
				{
					background:
						"radial-gradient(circle at bottom right, #45071e 0%, #242630 100%)",
					duration: 0.5,
				},
			);
		}
		if (e.target.id === "project-text") {
			gsap.fromTo(
				`#project-text`,
				{
					background:
						"radial-gradient(circle at bottom right, #242630e8 0%, #242630e8 100%)",
				},
				{
					background:
						"radial-gradient(circle at bottom right, #45071e 0%, #242630 100%)",
					duration: 0.5,
				},
			);
		}
	}

	function handleMouseLeave(e: any) {
		if (e.target.id) {
			gsap.to(`#${e.target.id}`, {
				background:
					"radial-gradient(circle at bottom right, #242630e8 0%, #242630e8 100%)",
				duration: 0.5,
			});
		}
	}

	return (
		<div id="animation-id">
			<div id="portfolio-bg" className="h-screen z-20 text-text-light">
				{/* Landing */}
				<div className="text-text-light" id="inner-portfolio-container">
					<h1 id="page-transition-text" className="lg:text-7xl  2xl:text-8xl">
						PORTFOLIO
					</h1>

					<div
						className="w-[1000px] pl-[10%] text-2xl font-[400] flex flex-col leading-9 top-[75%] absolute"
						id="mini-bio-div"
					>
						<span className="mini-bio-text">
							Scroll down to{" "}
							<span className="italic text-[#dcaa7e] font-medium">explore</span>{" "}
							some of the projects I've{" "}
							<span className="italic font-medium text-[#dcaa7e]">created</span>
							.
							<br />
							(Coming Soon) <br />
							<br /> In the meantime check out{" "}
							<span className="italic font-medium text-[#dcaa7e]">
								<a href="https://ecommerce-psi-sooty-97.vercel.app/">
									this project
								</a>
							</span>
						</span>
					</div>
				</div>

				<div className=" flex flex-col leading-9 justify-center items-center ">
					{/* View my projects text */}
					<div
						className="text-2xl font-[400] absolute top-[15%] opacity-0"
						id="view-projects-text"
					>
						<span className="">
							<span className="italic text-[#dcaa7e] font-medium">Click</span>{" "}
							or{" "}
							<span className="italic font-medium text-[#dcaa7e]">scroll</span>{" "}
							to view my projects
						</span>
					</div>
				</div>

				{/* Portfolio projects */}
				<div
					className="flex flex-row h-screen mt-10"
					id="portfolio-projects-section"
				>
					{/* TODO: fix text wrap in buttons */}
					<div
						id="project-selection-btns"
						className="flex flex-col justify-center items-start gap-10 pl-10"
					>
						<button className="project-selection-btn text-white border border-white rounded px-4 py-2 opacity-0">
							Project 1
						</button>
						<button className="project-selection-btn text-white border border-white rounded px-4 py-2 opacity-0">
							Project 2
						</button>
						<button className="project-selection-btn text-white border border-white rounded px-4 py-2 opacity-0">
							Project 3
						</button>
						<button className="project-selection-btn text-white border border-white rounded px-4 py-2 opacity-0">
							Project 4
						</button>
					</div>

					<div
						className="flex grow justify-center items-center gap-14 pr-10 opacity-0"
						id="project-display"
					>
						{/* Project Preview */}
						<div
							id="project-screen"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className="w-1/2 h-[60%] rounded-xl border-2 border-[#343849] flex flex-col justify-center items-center text-white"
						>
							<div id="project-contents" className="w-full p-8 flex flex-col justify-between h-full">
								<div
									id="project-top-section"
									className="flex flex-row justify-center items-center gap-4"
								>
									<div id="three-dots" className="flex flex-row gap-2">
										<MaterialSymbolsCircle height={"1.2em"} width={"1.2em"} />
										<MaterialSymbolsCircle height={"1.2em"} width={"1.2em"} />
										<MaterialSymbolsCircle height={"1.2em"} width={"1.2em"} />
									</div>

									<div
										id="search-bar"
										className="border-2 rounded-full border-[#fff] w-full flex justify-end pr-3"
									>
										<span>x</span>
									</div>
								</div>
								<div
									id="project-img-container"
									className="h-full border-2 border-[#fff] mt-7"
								>
									<img
										src="/projects/Stride-for-Education.png"
										alt="Logo"
										className=""
										id="project-img"
									/>
								</div>
							</div>
						</div>
						{/* Project Description */}
						<div
							id="project-text"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className="w-1/4 h-[60%] rounded-xl border-2 border-[#343849] flex justify-center items-center text-white"
						>
							<div id="project-description" className="m-8">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Doloremque dicta ipsam blanditiis doloribus, culpa sequi labore,
								veritatis laboriosam esse enim maxime earum, maiores dignissimos
								ad facilis debitis necessitatibus assumenda nam nostrum vitae
								eaque minus sint tenetur laborum! Iusto, esse labore.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
