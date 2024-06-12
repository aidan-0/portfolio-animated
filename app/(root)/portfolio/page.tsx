"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

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
			{ y: -150 },
			{
				y: 0,
				duration: 1.5,
			},
			"<",
		)
		.fromTo("#mini-bio-div", { top: "85%", opacity: 0 }, { top: "75%", opacity: 1, duration: 1.5, ease: "back" }, "<");
	}, []);

	return (
		<div id="animation-id">
			<div
				id="portfolio-bg"
				className="h-screen z-20 "
			>
				<div
					className="text-text-light"
					id="inner-portfolio-container"
				>
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
							some of
							the projects I've{" "}
							<span className="italic font-medium text-[#dcaa7e]">
								created
							</span>
							.
							<br />
							(Coming Soon) <br/><br/> In the meantime check out{" "}
								<span className="italic font-medium text-[#dcaa7e]">
								<a href='https://ecommerce-psi-sooty-97.vercel.app/'>this project</a>
							</span>
							
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
