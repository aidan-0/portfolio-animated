"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "../AnimationContext";

const Header = () => {
	const pathname = usePathname();
	// const { animationTrigger } = useAnimation();
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const navSvgRef = useRef<HTMLImageElement | null>(null);

	useGSAP(() => {
		// if (animationTrigger) {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline();
		timelineRef.current = timeline;

		console.log("Starting Header Animation");

		//load in animation
		timeline
			.to("#outer-container", {
				opacity: 1,
				duration: 1,
				ease: "power1.inOut",
			})
			.to(
				"#hero-div-container",
				{
					opacity: 1,
					duration: 1,
					ease: "power1.inOut",
				},
				"<",
			)
			.fromTo(
				"#hero-main-text",
				{
					y: 80,
				},
				{ duration: 2, y: 0, stagger: 0.05, ease: "elastic.out(1.15, 1)" },
				"<",
			)
			.from(
				"#header-container",
				{
					duration: 1,
					width: "70px",
					alignContent: "center",
				},
				"<",
			)
			.fromTo(
				".mini-bio-text",
				{
					y: 35,
				},
				{
					opacity: 1,
					y: 0,
					stagger: 0.05,
					ease: "power1.inOut",
				},
				"<",
			);
		timeline.from(
			"#nav-link",
			{
				opacity: 0,
				delay: 0.2,
				duration: 1.5,
			},
			"<",
		);

		// nav logo hover effect
		const hoverAnimation = gsap.to(navSvgRef.current, {
			background: "linear-gradient(45deg, #f88f7f, #fbcb85)",
			boxShadow: "rgba(153, 153, 153, 0.1) 0px 0px 8px 4px",
			scale: 1.04,
			filter: "grayscale(0.3)",
			duration: 0.3,
			ease: "power1.inOut",
			paused: true,
		});

		const navSvg = navSvgRef.current;
		if (navSvg) {
			navSvg.addEventListener("mouseenter", () => hoverAnimation.play());
			navSvg.addEventListener("mouseleave", () => hoverAnimation.reverse());
		}


		// }
	}, []);
	// }, [animationTrigger]);

	//Restart animation on logo click
	const handleLogoClick = () => {
		if (timelineRef.current) {
			timelineRef.current.restart();
		}
	};

	return (
		<div
			className="opacity-0 flex justify-center top-0 absolute"
			id="outer-container"
		>
			<header
				className="w-[80%] items-center overflow-hidden"
				id="header-container"
			>
				<div
					className="flex items-center justify-between py-5 font-semibold text-[18px] overflow-hidden"
					id="inner-header-container"
				>
					<Link
						href="#tech"
						className={`${pathname === "#tech" ? "text-[#dcaa7e]" : "text-[#adcae5]"}`}
						id="nav-link"
					>
						TECH
					</Link>
					<Link
						href="#portfolio"
						className={`${pathname === "#portfolio" ? "text-[#dcaa7e]" : "text-[#adcae5]"}`}
						id="nav-link"
					>
						PORTFOLIO
					</Link>

					<div onClick={handleLogoClick}>
						<Link href="/" id="nav-logo nav-link">
							<Image
								ref={navSvgRef}
								src="/logos/logo.png"
								alt="Logo"
								width={70}
								height={70}
								className=""
								id="nav-svg"
							/>
						</Link>
					</div>

					<Link
						href="/resume"
						className={`${pathname === "/resume" ? "text-[#dcaa7e]" : "text-[#adcae5]"}`}
						id="nav-link"
					>
						RESUME
					</Link>
					<Link
						href="/contact"
						className={`${pathname === "/contact" ? "text-[#dcaa7e]" : "text-[#adcae5]"}`}
						id="nav-link"
					>
						CONTACT
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Header;
