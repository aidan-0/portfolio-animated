"use client"

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

const page = () => {
	useGSAP(() => {
		const techTl = gsap.timeline();


		techTl
		.to("#animation-id", {
			opacity: 1,
			duration: 1,
			ease: "power1.inOut",
		
		}, 0)
		.to("#transition-element", {
			opacity: 50,
			zIndex: 0,
		}, "<")
		.from("#inner-tech-container", {
			opacity: 0,
			duration: 1,
		}, "<")
		.to("#outer-header-container", {
			y: 0,
			duration: 1,
		  }, "<")
	}, []);


	return (
		<>
			<div id="animation-id">
				<div
					id="tech-bg"
					className="h-screen w-screen flex justify-center align-middle items-center z-20"
				>
					<div
						className="h-screen w-screen flex flex-col justify-center tracking-wider font-semibold pt-20 text-text-light"
						id="inner-tech-container"
					>
						<span
							className="text-3xl text-center font-[500] text-[#dcaa7e] pt-24"
							id=""
						>
							Hi, I'm
						</span>
						<span className="text-3xl sm:text-8xl text-center" id="">
							AIDAN
						</span>
						<span className="text-3xl sm:text-8xl text-center pb-36" id="">
							MCDONALD
						</span>

						<div
							className="w-[1000px] pl-[10%] text-2xl font-[400] flex flex-col leading-9"
							id="mini-bio-div"
						>
							<span className="mini-bio-text ">
								A dedicated Web Developer from Perth,
								<br />
							</span>
							<span className="mini-bio-text">
								specialising in{" "}
								<span className="italic text-[#dcaa7e] font-medium">
									designing
								</span>{" "}
								and{" "}
								<span className="italic font-medium text-[#dcaa7e]">
									developing
								</span>{" "}
								<br />
							</span>
							<span className="mini-bio-text ">advanced client solutions.</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
