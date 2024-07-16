"use client";

import React from "react";
import EntryAnimation from "../../components/ui/EntryAnimation";

// GSAP animations for this page are within EntryAnimation.tsx and Header.tsx to animate the text

const page = () => {
	return (
		<>
			<EntryAnimation />
			<div id="animation-id">
				<div
					id="home-section1"
					className=" flex justify-center align-middle items-center z-20"
				>
					<div
						className="h-screen w-screen flex flex-col justify-center font-semibold pt-20 opacity-0 text-text-light"
						id="hero-div-container"
					>
						<span
							className="text-xl sm:text-3xl text-center font-[500] pt-24 text-gradient"
							id="hero-main-text"
						>
							Hi, I'm
						</span>
						<span
							className="text-4xl sm:text-6xl lg:text-8xl  text-center"
							id="hero-main-text"
						>
							AIDAN
						</span>
						<span
							className="text-4xl sm:text-6xl lg:text-8xl  text-center pb-36"
							id="hero-main-text"
						>
							MCDONALD
						</span>

						<div
							className="lg:w-[999px] px-4 sm:pl-[10%] text-base sm:text-2xl pb-20 sm:pb-0 font-[400] flex flex-col leading-6 sm:leading-9 text-center md:text-left"
							id="mini-bio-div"
						>
							<span className="mini-bio-text opacity-0">
								A dedicated Web Developer from Perth,{" "}
							<span className="mini-bio-text opacity-0">
								<br className="hidden sm:flex"/>
							<span className="mini-bio-text opacity-0">
								specialising in{" "}
								<span className="italic font-medium text-gradient">
									designing
								</span>{" "}
								and{" "}
								<span className="italic font-medium text-gradient">
									developing
								</span>{" "}
								<br className="hidden sm:flex"/>
							</span>
								advanced client solutions.
							</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
