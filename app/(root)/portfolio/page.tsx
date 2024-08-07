"use client";

import React, { useRef, useEffect, useState } from "react";
import "./Portfolio.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MaterialSymbolsCircle } from "../../../components/ui/Icons";
import { projectData } from "../../../components/data";
import useViewportHeight from "@/components/viewportHeight";

const Page = () => {
	const viewportHeight = useViewportHeight();
	const scrollLength = viewportHeight * projectData.length;

	const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          setWindowWidth(window.innerWidth);
    
          const handleResize = () => {
            const newWindowWidth = window.innerWidth;
            if (newWindowWidth !== windowWidth) {
              window.location.reload(); // Reload the page on horizontal resize
            }
          };
    
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }
      }, [windowWidth]);

useGSAP(() => {
  if (windowWidth > 0) {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    // Entry animations
    const portfolioTl = gsap.timeline();

    portfolioTl
		.fromTo(
			".mini-bio-text",
			{ opacity: 0 },
			{ opacity: 1, duration: 2 },
			"+=0.01",
		)
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
        "#portfolio-bio-div",
        { top: "85%", opacity: 0, visibility: "hidden", autoAlpha: 0 },
        { top: "75%", opacity: 1, duration: 1.5, autoAlpha: 1 },
        "<",
      )

      .to(
        "*",
        {
          overflow: "initial",
        },
        "<",
      );

    mm.add("(min-width: 768px)", () => {
      portfolioTl.fromTo(
        "#outer-header-container",
        { y: -150, opacity: 0, visibility: "hidden", autoAlpha: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          autoAlpha: 1,
        },
        "<",
      );
    });

    mm.add("(max-width: 767px)", () => {
      portfolioTl
        .fromTo(
          "#mobile-header",
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          0,
        )
        .fromTo(
          "#portfolio-bio-div",
          { top: "85%", opacity: 0 },
          { top: "65%", opacity: 1, duration: 1.5 },
          "<",
        );
    });

    // Scroll animations desktop
    mm.add("(min-width: 640px)", () => {
      const tlPortfolio = gsap.timeline({
        scrollTrigger: {
          trigger: "#portfolio-bg",
          start: "top top",
          end: `+=${scrollLength + 300}`,
          scrub: 1,
          pin: true,
        },
      });
      tlPortfolio.to("#portfolio-bg", {
        duration: 100,
      });

      mm.add("(max-width: 1023px)", () => {
        tlPortfolio
          .to(
            "#page-transition-text",
            {
              top: "30%",
              opacity: 0,
              duration: 3,
            },
            "<",
          )
          .fromTo(
            "#portfolio-bio-div",
            { opacity: 1 },
            { opacity: 0, duration: 2.5 },
            "<",
          );
      });

      mm.add("(min-width: 767px)", () => {
        tlPortfolio
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
            "#portfolio-bio-div",
            { top: "75%", opacity: 1 },
            { top: "85%", opacity: 0, duration: 2.5 },
            "<",
          )
          .to(
            "#page-transition-text",
            {
              top: "10%",
              duration: 12,
            },
            "<",
          );
      });

      tlPortfolio.fromTo(
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
      );

      mm.add("(max-width: 1023px)", () => {
        tlPortfolio.fromTo(
          "#view-projects-text",
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 0,
            y: 0,
            duration: 5,
          },
          "+7",
        );
      });

      mm.add("(min-width: 1024px)", () => {
        tlPortfolio.fromTo(
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
        );
      });

      mm.add("(max-width: 1023px)", () => {
        tlPortfolio.fromTo(
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
          2,
        );
      });

      tlPortfolio.to(
        "#portfolio-bio-div",
        {
          display: "none",
        },
        "+10",
      );
    });

    // Mobile scroll animations
    mm.add("(max-width: 639px)", () => {
      const mobileProjectContainer2 = document.querySelector(
        "#mobile-project-container",
      ) as HTMLElement;
      const totalHeight = mobileProjectContainer2.scrollHeight;

      const tlPortfolio = gsap.timeline({
        scrollTrigger: {
          trigger: "#portfolio-bg",
          start: "top top",
          end: `+=${totalHeight}`,
          scrub: 1,
          pin: true,
        },
      });
      tlPortfolio.to("#portfolio-bg", {
        duration: 100,
      });

      mm.add("(max-width: 1023px)", () => {
        tlPortfolio
          .to(
            "#page-transition-text",
            {
              top: "30%",
              opacity: 0,
              duration: 3,
            },
            "<",
          )
          .fromTo(
            "#portfolio-bio-div",
            { opacity: 1 },
            { opacity: 0, duration: 2.5 },
            "<",
          );
      });

      tlPortfolio.fromTo(
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
      );

      mm.add("(max-width: 1023px)", () => {
        tlPortfolio.fromTo(
          "#view-projects-text",
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 0,
            y: 0,
            duration: 5,
          },
          "+7",
        );
      });

      mm.add("(max-width: 1023px)", () => {
        tlPortfolio.fromTo(
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
          2,
        );
      });

      tlPortfolio.to(
        "#portfolio-bio-div",
        {
          display: "none",
        },
        "+10",
      );
    });

    // Pinned Card Scroll Effect
    mm.add("(min-width: 1024px)", () => {
      gsap.utils.toArray(".project-text").forEach((textElement: any, i) => {
        const imageElement = document.querySelectorAll(
          ".project-img-inner-container",
        )[i];
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
          yPercent: `-${projectData.length - 1}00`,
          ease: "linear",
          scrollTrigger: {
            trigger: ".project-text",
            start: "top bottom",
            end: `+=${scrollLength}`,
            scrub: true,
          },
        },
      );
    });

			// Tablet
			mm.add("(max-width: 1023px) and (min-width: 640px)", () => {
				gsap.utils.toArray(".project-text").forEach((textElement: any, i) => {
					const imageElement = document.querySelectorAll(
						".project-img-inner-container",
					)[i];
					const techStack = document.querySelectorAll(".project-tech-stack")[i];

					gsap.fromTo(
						imageElement,
						{ y: viewportHeight / 2 },
						{
							y: 0,
							ease: "linear",
							scrollTrigger: {
								trigger: textElement,
								start: "top 80%",
								end: `+=${viewportHeight / 2}`,
								scrub: true,
							},
						},
					);
				});

				gsap.fromTo(
					".project-text",
					{
						yPercent: 0,
					},
					{
						yPercent: `-${projectData.length - 1}00`,
						ease: "linear",
						scrollTrigger: {
							trigger: ".project-text",
							start: "top 35%",
							end: `+=${scrollLength * 0.8}`,
							scrub: true,
						},
					},
				);
			});

			// Mobile
			mm.add("(max-width: 639px)", () => {
				const mobileProjectContainer = document.querySelector(
					"#mobile-project-container",
				) as HTMLElement;
				const totalHeight = mobileProjectContainer.scrollHeight;

				gsap.fromTo(
					mobileProjectContainer,
					{
						yPercent: 0,
					},
					{
						yPercent: -87.5,
						ease: "linear",
						scrollTrigger: {
							trigger: ".project-text",
							start: "top top",
							end: () => `+=${totalHeight}px`,
							scrub: true,
						},
					},
				);
			});
		}
	}, [windowWidth]);

	// Hover Effects
	function handleMouseEnterBtn(e: any) {
		if (e.target.id) {
			gsap.fromTo(
				`#${e.target.id}`,
				{
					background:
						"radial-gradient(circle at bottom center, #242630 0%, #242630 100%)",
				},
				{
					background:
						"radial-gradient(circle at bottom center, #11263f 0%, #19293c 100%)",
					duration: 0.5,
				},
			);
		}
	}

	function handleMouseLeaveBtn(e: any) {
		if (e.target.id) {
			gsap.fromTo(
				`#${e.target.id}`,
				{
					background:
						"radial-gradient(circle at bottom center, #11263f 0%, #19293c 100%)",
				},
				{
					background:
						"radial-gradient(circle at bottom center, #242630 0%, #242630 100%)",
					duration: 0.5,
				},
			);
		}
	}

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
						className="lg:w-[1000px] pb-[20%] sm:pb-[0] px-[5%] sm:pl-[10%] 2xl:pl-[5%] text-xl sm:text-2xl font-[400] leading-9 absolute text-center sm:text-left opacity-0"
						id="portfolio-bio-div"
					>
						<span className="mini-bio-text opacity-0">
							Scroll down to{" "}
							<span className="italic text-portfolio-accent font-medium">
								explore
							</span>{" "}
							some of the projects I've{" "}
							<span className="italic font-medium text-portfolio-accent">
								created
							</span>
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
						<span className="italic font-medium text-portfolio-accent">
							Scroll
						</span>{" "}
						to view my projects
					</span>
				</div>

				{/* PORTFOLIO PROJECTS */}
				{windowWidth >= 640 ? (
					<div
						className="flex flex-row h-screen max-w-[1700px]"
						id="portfolio-projects-section"
					>
						<div
							className="flex flex-col lg:flex-row grow justify-center items-center gap-4 pb-4 lg:pb-0 lg:gap-14 pt-24 md:pt-4 lg:pt-16 opacity-0"
							id="project-display"
						>
							{/* PROJECT PREVIEW */}
							<div
								id="project-screen"
								className="w-[90%] sm:w-[88%] md:w-[65%] lg:w-[60%] xl:w-1/2 h-[30%] sm:h-[50%] lg:h-[64vh] rounded-xl border border-portfolio-border flex flex-col justify-center items-center text-text-light"
							>
								<div
									id="project-contents"
									className="w-full lg:p-8 flex flex-col justify-between h-full"
								>
									{windowWidth >= 1024 ? (
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
												<MaterialSymbolsCircle
													height={"1.2em"}
													width={"1.2em"}
													id="three-dots-yellow"
												/>
												<MaterialSymbolsCircle
													height={"1.2em"}
													width={"1.2em"}
													id="three-dots-green"
												/>
											</div>

											<div
												id="search-bar"
												className="border rounded-full border-text-light w-full flex justify-end pr-3"
											>
												<span>x</span>
											</div>
										</div>
									) : null}
									{/* IMAGE CONTAINER */}
									<div className="h-full lg:border lg:border-portfolio-border lg:mt-7 relative project-img-container ">
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
												{windowWidth > 600 ? (
													<div className="project-tech-stack absolute top-5 left-5">
														{project.techStack.map((tech, index) => (
															<div
																key={index}
																className="tech-stack-item text-sm rounded bg-[#] px-2 sm:px-3 py-1 sm:py-1.5 mb-2 font-[500]  text-text-light"
																id={`tech-stack-item-${index + 1}`}
																onMouseEnter={handleMouseEnterBtn}
																onMouseLeave={handleMouseLeaveBtn}
															>
																{tech}
															</div>
														))}
													</div>
												) : null}
											</div>
										))}
									</div>
								</div>
							</div>
							{/* PROJECT DESCRIPTION */}
							<div
								id="project-text-container"
								className="w-[90%] sm:w-[88%] md:w-[65%] lg:w-[30%] xl:w-1/4 h-[70%] sm:h-[50%] lg:h-[64vh] rounded-xl border border-portfolio-border flex flex-col justify-start items-center relative"
							>
								{projectData.map((project, index) => (
									<div
										className="leading-6 flex flex-col pt-20 items-center w-full max-h-screen min-h-screen p-4 sm:p-6 project-text"
										key={index}
										id={`project-text-${index}`}
									>
										<h1 className="md:text-xl lg:text-2xl xl:text-[36px] 2xl:text-4xl leading-4 xl:leading-[38px] text-text-light font-bold text-center tracking-[0.15em] projectName pb-3 ">
											{project.projectName}
										</h1>
										<div className="border-b-2 border-portfolio-accent mx-5 mb-4 w-[92%]"></div>

										<div className="pb-8 tracking-wide text-base 2xl:text-lg">
											{project.projectDescription}
										</div>
										{windowWidth <= 600 ? (
											<div className="pb-8 tracking-wide text-base 2xl:text-lg">
												{project.techStack}
											</div>
										) : null}
										<a
											className="tracking-wider font-semibold text-base 2xl:text-lg rounded-[10px] justify-stretch text-center w-full mx-5 py-3 project-btn"
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
				) : (
					<div className="" id="portfolio-projects-section">
						<div
							className="flex grow justify-center items-center gap-4 pb-4 pt-24 opacity-0 h-[100%]"
							id="project-display"
						>
							<div
								id="project-text-container"
								className="w-[95%] h-full rounded-xl border border-portfolio-border flex flex-col justify-start items-center relative"
							>
								<div id="mobile-project-container">
									{projectData.map((project, index) => (
										<div
											className="leading-6 flex flex-col pt-10 items-center w-full p-4 project-text"
											key={index}
											id={`project-text-${index}`}
										>
											<h1 className="leading-4 text-text-light font-bold text-center tracking-[0.15em] projectName pb-3">
												{project.projectName}
											</h1>

											<div className="border-b-2 border-portfolio-accent mx-5 mb-4 w-[92%]"></div>

											<div
												key={index}
												className="mobile-project-img-inner-container rounded-xl mb-4 border border-portfolio-border w-[100%] h-[100%]"
											>
												<a
													href={project.projectLink}
													target="_blank"
													className=""
												>
													<img
														src={project.projectImage}
														alt="project-image"
														className="project-img rounded-xl w-[100%] h-[100%]"
														id={`project-img-${index}`}
													/>
												</a>
											</div>

											<div className="pb-4 tracking-wide text-[15px]">
												{project.projectDescription}
											</div>

											<div className="tracking-wide text-base flex flex-row gap-2 flex-wrap justify-center">
												{project.techStack.map((tech, index) => (
													<div
														key={index}
														className="mobile-tech-stack-item text-sm rounded-[6px] bg-[#ffffff0e] border border-portfolio-border px-2 py-1 mb-1 font-[500] text-text-light"
														id={`tech-stack-item-${index + 1}`}
														onMouseEnter={handleMouseEnterBtn}
														onMouseLeave={handleMouseLeaveBtn}
													>
														{tech}
													</div>
												))}
											</div>

											<a
												className="tracking-wider font-semibold text-base rounded-[10px] justify-stretch text-center w-full mx-5 py-3 mt-4 mb-10 mobile-project-btn border border-portfolio-border"
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
				)}
			</div>
		</div>
	);
};

export default Page;
