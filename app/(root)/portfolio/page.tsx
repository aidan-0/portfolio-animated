"use client";

import React, { useRef, useEffect, useState } from "react";
import "./Portfolio.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaterialSymbolsCircle } from "../../../components/ui/Icons";
import { projectData } from "../../../components/data";
import { useLenis } from "lenis/react";
const page = () => {
	if (typeof window === "undefined") return null;
	const viewportHeight = window.innerHeight;
	const viewportWidth = window.innerWidth;
	const scrollLength = viewportHeight * projectData.length;
	console.log("viewportHeight: ", viewportHeight);

	// TODO:
	//'Scroll to' (for the buttons to go to a set project)
	// const lenis = useLenis((scroll) => {
	// 	console.log(scroll)
	// })
	// https://www.youtube.com/watch?v=QNh0MH-G3OM

	let mm = gsap.matchMedia();

	// TODO: something in the portfolio section is causing the rendered width of tech to be around 800px - could be fixed after portfolio is responsively designed

	// Entry animations
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
			);

		mm.add("(min-width: 767px)", () => {
			portfolioTl.fromTo(
				"#outer-header-container",
				{ y: -150, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1.5,
				},
				"<",
			);
		});

		mm.add("(max-width: 767px)", () => {
			portfolioTl.fromTo(
				"#mobile-header",
				{ y: -100, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1,
				},
				0,
			);
		});

		portfolioTl
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

	// Scroll animations
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tlPortfolio = gsap.timeline({
			scrollTrigger: {
				trigger: "#portfolio-bg",
				start: "top top",
				end: `+=${scrollLength + 300}`,
				scrub: 1,
				// markers: true,
				pin: true,
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
			);

		// Desktop header animation
		mm.add("(min-width: 767px)", () => {
			tlPortfolio.fromTo(
				"#outer-header-container",
				{
					y: 0,
				},
				{
					y: -150,
					duration: 7,
				},
				"<",
			);
		});

		tlPortfolio
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
				"+7",
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
	});

	// Pinned Card Scroll Effect
	useGSAP(() => {
		gsap.utils.toArray(".project-text").forEach((textElement: any, i) => {
			const imageElement = document.querySelectorAll(
				".project-img-inner-container",
			)[i];
			// const imageElement = document.querySelectorAll(".project-img")[i];
			const techStack = document.querySelectorAll(".project-tech-stack")[i];

			gsap.fromTo(
				imageElement,
				{ y: viewportHeight / 1.884 },
				{
					y: 0,
					ease: "linear",
					scrollTrigger: {
						trigger: textElement,
						start: "top 50%",
						end: `+=${viewportHeight / 2}`,
						scrub: true,
						// markers: {
						//   startColor: "pink",
						//   endColor: "pink",
						//   fontSize: "18px",
						//   indent: 400,
						// },
					},
				},
			);
			gsap.fromTo(
				techStack,
				{ y: viewportHeight / 2 },
				{
					y: 0,
					scrollTrigger: {
						trigger: textElement,
						start: "top 50%",
						end: `+=${viewportHeight / 2}`,
						scrub: true,
						// markers: {
						//   startColor: "pink",
						//   endColor: "pink",
						//   fontSize: "18px",
						//   indent: 1000,
						// },
					},
				},
			);
		});

		gsap.fromTo(
			".project-text",
			{
				yPercent: 100,
			},
			{
				yPercent: `-${projectData.length - 1}00`, // 100% * number of projects

				ease: "linear",
				scrollTrigger: {
					trigger: ".project-text",
					start: "top bottom",
					end: `+=${scrollLength}`,
					scrub: true,
					// markers: {
					//   startColor: "cyan",
					//   endColor: "cyan",
					//   fontSize: "18px",
					//   indent: 800,
					// },
				},
			},
		);
	}, []);

	// Hover Effects
	function handleMouseEnterBtn(e: any) {
		if (e.target.id) {
			console.log(e.target.id);
			gsap.fromTo(
				`#${e.target.id}`,
				{
					background:
						"radial-gradient(circle at bottom center, #242630 0%, #242630 100%)",
				},
				{
					background:
						"radial-gradient(circle at bottom center, #292E48 50%, #242630 100%)",
					duration: 0.4,
				},
			);
		}
	}

	function handleMouseLeaveBtn(e: any) {
		if (e.target.id) {
			console.log(e.target.id);
			gsap.to(`#${e.target.id}`, {
				background:
					"radial-gradient(circle at bottom center, #242630 0%, #242630 100%)",
				duration: 0.5,
			});
		}
	}

	// Scroll to project/image
	// TODO: Only implement this for mobile screens - currently this breaks the scrolling
	// const resetImages = (currentIndex: number) => {
	// 	gsap.utils.toArray(".project-img").forEach((imageElement: any, index) => {
	// 		if (index !== currentIndex) {
	// 			gsap.to(imageElement, {
	// 				yPercent: 111,
	// 				duration: 1,
	// 				ease: "power1.inOut",
	// 			});
	// 		}
	// 	});
	// };

	// const scrollToProject = (index: number) => {
	// 	const textElement = document.getElementById(`project-text-${index}`);
	// 	const imageElement = document.querySelectorAll(".project-img")[index];

	// 	if (textElement) {
	// 		textElement.scrollIntoView({ behavior: "smooth" });
	// 	}

	// 	if (imageElement) {
	// 		gsap.to(imageElement, {
	// 			yPercent: 0,
	// 			duration: 1,
	// 			ease: "power1.inOut",
	// 		});
	// 	}

	// 	resetImages(index);
	// };

	return (
		<div id="animation-id">
			<div
				id="portfolio-bg"
				className="h-screen z-20 text-text-light flex justify-center"
			>
				{/* Landing */}
				<div className="text-text-light" id="inner-portfolio-container">
					<h1
						id="page-transition-text"
						className="text-[2.5rem] sm:text-6xl lg:text-7xl 2xl:text-8xl "
					>
						PORTFOLIO
					</h1>

					<div
						className="lg:w-[1000px] pl-[10%] 2xl:pl-[5%] text-2xl font-[400] leading-9 lg:top-[75%] absolute text-left"
						id="mini-bio-div"
					>
						<span className="mini-bio-text">
							Scroll down to{" "}
							<span className="italic text-[#dcaa7e] font-medium">explore</span>{" "}
							some of the projects I've{" "}
							<span className="italic font-medium text-[#dcaa7e]">created</span>
							.
						</span>
					</div>
				</div>

				{/* View my projects text */}
				<div
					className="text-2xl font-[400] absolute top-[15%] right-0 left-0 mx-auto opacity-0 whitespace-normal flex justify-center items-center"
					id="view-projects-text"
				>
					<span className="text-center">
						<div className="inline sm:hidden">
							<span className="italic text-[#dcaa7e] font-medium">Click</span>{" "}
							or
						</div>
						<span className="italic font-medium text-[#dcaa7e]">Scroll</span> to
						view my projects
					</span>
				</div>

				{/* PORTFOLIO PROJECTS */}
				<div
					className="flex flex-row h-screen max-w-[1700px]"
					id="portfolio-projects-section"
				>
					{/* PROJECT BUTTONS */}
					{/* <div
						id="project-selection-btns"
						className="flex flex-col justify-center items-start gap-8 pl-10 "
					>
						{projectData.map((project, index) => (
							<button
								key={index}
								className="project-selection-btn text-white rounded border-2 border-[#ecedf1] px-7 py-2 opacity-0 w-full"
								id={`project-selection-btn-${index + 1}`}
								onMouseEnter={handleMouseEnterBtn}
								onMouseLeave={handleMouseLeaveBtn}
								// onClick={() => scrollToProject(index)}
							>
								{project.projectBtnText}
							</button>
						))}
					</div> */}

					<div
						className="flex flex-col lg:flex-row grow justify-center items-center gap-4 pb-4 lg:pb-0 lg:gap-14 pt-24 lg:pt-16 opacity-0"
						id="project-display"
					>
						{/* PROJECT PREVIEW */}
						<div
							id="project-screen"
							className="w-[80%] lg:w-[60%] xl:w-1/2 h-[30%] lg:h-[64vh] rounded-xl border-2 border-[#ecedf1] flex flex-col justify-center items-center text-white"
						>
							<div
								id="project-contents"
								className="w-full lg:p-8 flex flex-col justify-between h-full"
							>
								{viewportWidth > 1024 ?
								 <div
									id="project-top-section"
									className="flex flex-row justify-center items-center gap-4"
								>
									<div id="three-dots" className="flex flex-row gap-2">
										<MaterialSymbolsCircle
											height={"1.2em"}
											width={"1.2em"}
											color="#ecedf1"
											id="three-dots-red"
										/>
										<MaterialSymbolsCircle height={"1.2em"} width={"1.2em"} id="three-dots-yellow"
 />
										<MaterialSymbolsCircle height={"1.2em"} width={"1.2em"} id="three-dots-green"
										/>
									</div>

									<div
										id="search-bar"
										className="border-2 rounded-full border-[#e2e3e7] w-full flex justify-end pr-3"
									>
										<span>x</span>
									</div>
								</div> : null}
								{/* IMAGE CONTAINER */}
								<div className="h-full lg:border-2 lg:border-[#ecedf1] lg:mt-7 relative project-img-container ">
									{projectData.map((project, index) => (
										<div
											key={index}
											className="absolute project-img-inner-container"
										>
											<a href={project.projectLink} target="_blank">
												<img
													src={project.projectImage}
													alt="project-image"
													className="project-img"
													id={`project-img-${index}`}
												/>
											</a>
											<div className="project-tech-stack absolute top-5 left-5">
												{project.techStack.map((tech, index) => (
													<div
														key={index}
														className="tech-stack-item text-sm bg-[#242630] rounded px-2 sm:px-3 py-1 sm:py-1.5 mb-2 font-[500]  text-text-light"
														id={`tech-stack-item-${index + 1}`}
														onMouseEnter={handleMouseEnterBtn}
														onMouseLeave={handleMouseLeaveBtn}
													>
														{tech}
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* PROJECT DESCRIPTION */}
						<div
							id="project-text-container"
							className="w-[80%] lg:w-[30%] xl:w-1/4 h-[60%] lg:h-[64vh] rounded-xl border-2 border-[#ecedf1] flex flex-col justify-start items-center relative"
						>
							{projectData.map((project, index) => (
								<div
									className="leading-6 flex flex-col pt-20 items-center w-full min-h-screen p-6 project-text"
									key={index}
									id={`project-text-${index}`}
								>
									<h1 className="md:text-xl lg:text-2xl xl:text-[36px] 2xl:text-4xl leading-4 xl:leading-[38px] text-text-light font-bold text-center tracking-[0.15em] projectName pb-3 ">
										{project.projectName}
									</h1>
									<div className="border-b-2 border-[#36448a] mx-5 mb-4 w-[92%]"></div>
							
									<div className="pb-8 tracking-wide text-base 2xl:text-lg">
										{project.projectDescription}
									</div>
									<a
										className="tracking-wider border-[#ecedf1] font-semibold text-base 2xl:text-lg rounded-[10px] border-2 justify-stretch text-center w-full mx-5 py-3 project-btn"
										href={project.projectLink}
										target="_blank"
									>
										{project.projectDescriptionButton}
									</a>
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
