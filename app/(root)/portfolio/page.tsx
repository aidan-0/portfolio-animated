"use client";

import React from "react";
import "./Portfolio.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaterialSymbolsCircle } from "../../../components/ui/Icons";
import { projectData } from "../../../components/data";
import { useLenis } from "lenis/react";
const page = () => {
	//Scroll to (for the buttons to go to a set project)
	// const lenis = useLenis((scroll) => {
	// 	console.log(scroll)
	// })
	// https://www.youtube.com/watch?v=QNh0MH-G3OM

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
				end: "+=10000",
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
				duration: 100,
			})
			.to(
				"#page-transition-text",
				{
					top: "10%",
					duration: 12,
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
					duration: 7,
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
					duration: 5,
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
					duration: 5,
				},
				+7,
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
					duration: 7,
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
					stagger: 0.6,
				},
				"<",
			);

		// Cards have fully entered. Now targeting the scrolling on the text inside the cards
		gsap.fromTo(
			".project-text",
			{
				y: 0,
			},
			{
				y: -1500,
				duration: 90,
				scrollTrigger: {
					trigger: ".project-text",
					start: "top+=1000 top", 
					end: "+=5000", 
					scrub: 1, 
					markers: true, 
				},
			},
		);


		const photos = gsap.utils.toArray(".project-img-inner-container:not(:first-child)")
		gsap.set(photos, { yPercent:101})

		const animation = gsap.to(photos, {yPercent:0, duration:1, stagger:1})

		ScrollTrigger.create({
			trigger: ".project-text",
			start: "top top",
			end: "bottom bottom",
			animation: animation,
			scrub: true,
			markers: true,
		})


	});

	// Add hover effect
	function handleMouseEnterCard(e: any) {
		if (e.target.id) {
			gsap.fromTo(
				`#${e.target.id}`,
				{
					background:
						"radial-gradient(circle at bottom right, #242630e8 0%, #242630e8 100%)",
				},
				{
					background:
						"radial-gradient(circle at bottom right, #292E48 0%, #242630 100%)",
					duration: 0.5,
				},
			);
		}
	}
	function handleMouseEnterBtn(e: any) {
		if (e.target.id) {
			gsap.fromTo(
				`#${e.target.id}`,
				{
					background:
						"radial-gradient(circle at bottom center, #242630e8 0%, #242630e8 100%)",
				},
				{
					background:
						"radial-gradient(circle at bottom center, #292E48 50%, #242630 100%)",
					duration: 0.4,
				},
			);
		}
	}

	// Remove hover effect
	function handleMouseLeaveCard(e: any) {
		if (e.target.id) {
			gsap.to(`#${e.target.id}`, {
				background:
					"radial-gradient(circle at bottom right, #242630e8 0%, #242630e8 100%)",
				duration: 0.5,
			});
		}
	}

	function handleMouseLeaveBtn(e: any) {
		if (e.target.id) {
			gsap.to(`#${e.target.id}`, {
				background:
					"radial-gradient(circle at bottom center, #242630e8 0%, #242630e8 100%)",
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
							{/* <br /> In the meantime check out{" "}
							<span className="italic font-medium text-[#dcaa7e] z-[1000]">
								<a href="https://ecommerce-psi-sooty-97.vercel.app/">
									this project
								</a>
							</span> */}
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

				{/* PORTFOLIO PROJECTS */}
				<div className="flex flex-row h-screen" id="portfolio-projects-section">
					{/* PROJECT BUTTONS */}
					<div
						id="project-selection-btns"
						className="flex flex-col justify-center items-start gap-10 pl-10"
					>
						{projectData.map((project, index) => (
							<button
								key={index}
								className="project-selection-btn text-white rounded border-2 border-[#ecedf1] px-7 py-2 opacity-0 w-[150px]"
								id={`project-selection-btn-${index + 1}`}
								onMouseEnter={handleMouseEnterBtn}
								onMouseLeave={handleMouseLeaveBtn}
							>
								{project.projectBtnText}
							</button>
						))}
					</div>

					<div
						className="flex grow justify-center items-center gap-14 pr-10 opacity-0"
						id="project-display"
					>
						{/* PROJECT PREVIEW */}
						<div
							id="project-screen"
							onMouseEnter={handleMouseEnterCard}
							onMouseLeave={handleMouseLeaveCard}
							className="w-1/2 h-[60%] rounded-xl border-2 border-[#ecedf1] flex flex-col justify-center items-center text-white"
						>
							<div
								id="project-contents"
								className="w-full p-8 flex flex-col justify-between h-full"
							>
								<div
									id="project-top-section"
									className="flex flex-row justify-center items-center gap-4"
								>
									<div id="three-dots" className="flex flex-row gap-2">
										<MaterialSymbolsCircle
											height={"1.2em"}
											width={"1.2em"}
											color="#ecedf1"
										/>
										<MaterialSymbolsCircle height={"1.2em"} width={"1.2em"} />
										<MaterialSymbolsCircle height={"1.2em"} width={"1.2em"} />
									</div>

									<div
										id="search-bar"
										className="border-2 rounded-full border-[#e2e3e7] w-full flex justify-end pr-3"
									>
										<span>x</span>
									</div>
								</div>
								{/* IMAGE CONTAINER */}
								<div className="h-full border-2 border-[#ecedf1] mt-7 relative project-img-container overflow-hidden">
									{projectData.map((project, index) => (
										<div
											key={index}
											className="absolute project-img-inner-container"
										>
											<img
												src={project.projectImage}
												alt="project-image"
												className="project-img"
											/>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* PROJECT DESCRIPTION */}
						<div
							id="project-text-container"
							onMouseEnter={handleMouseEnterCard}
							onMouseLeave={handleMouseLeaveCard}
							className="w-1/4 h-[60%] rounded-xl border-2 border-[#ecedf1] flex flex-col justify-start items-center text-white relative"
						>
							{projectData.map((project, index) => (
								<div
									className="project-description leading-6 tracking-wider flex flex-col justify-center items-center w-full min-h-screen project-text"
									
									key={index}
								>
									<div className="text-xl font-semibold">
										{project.projectName}
									</div>
									<div className="text">{project.projectDescription}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
