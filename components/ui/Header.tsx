"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "../AnimationContext";


const Header = () => {
	const pathname = usePathname();
	const { animationTrigger } = useAnimation();

	useGSAP(() => {
		if (animationTrigger) {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline();
		console.log("Starting Header Animation");

		//load in animation
		timeline
			.to("#outer-container", {
				opacity: 1,
				duration: 1,
				ease: "power1.inOut",
			})
			.fromTo(
				"#aidan-mcdonald-div",
				{
					y: 200,
				},
				{ opacity: 1, duration: 1, y: 0, ease: "power1.inOut" },
				"<",
			)
			.from(
				"#header-container",
				{
					// delay: 6.3,
					// ease: "power3.inOut",
					duration: 1,
					width: "70px",
					alignContent: "center",
				},
				"<",
			),
			timeline.from(
				"#nav-link",
				{
					opacity: 0,
					delay: 0.2,
					duration: 1.5,
				},
				"<",
			);

		// header fade away
		// const tlHeaderScroll = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: "#home-section1",
		// 		start: "top top",
		// 		end: "+=350px",
		// 		markers: true,
		// 		scrub: 1,
		// 	},
		// });

		

		// tlHeaderScroll
			// .to(
			// 	"#nav-link",
			// 	{
			// 		opacity: 0,
			// 		duration: 4,
			// 	},
			// 	"<",
			// )
			// .to(
			// 	"#outer-container",
			// 	{
			// 		opacity: 0,
			// 		duration: 4,
			// 		ease: "power1.inOut",
			// 	},
			// 	"<",
			// )
			// .fromTo(
			// 	"#header-container",
			// 	{
			// 		width: "80%"
			// 	},
			// 	{
			// 		duration: 4,
			// 		width: "50%",
			// 		// delay: 0,
			// 	},
			// 	"<",
			// )

			


		// hover logo for nav show
		const tlHeaderIcon = gsap.timeline({
			scrollTrigger: {
				trigger: "#home-section1",
				start: "+=1000px top",
				end: "+=400px",
				markers: true,
				scrub: 1,
			},
		});
		tlHeaderIcon
		.to("#header-container", {
			width: "80%",
		})
		.to("#outer-container", {
			paddingLeft: "100px",
			paddingRight: "100px",
		})
		.to("#nav-link", {
			display: "none",
		}, "<")
		.to("#outer-container", {
			opacity: 1,
			ease: "power1.inOut",
			duration: 1,
		})




		}
	// }, []);
	}, [animationTrigger]);

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
					className="flex items-center justify-between  py-5 font-semibold text-[18px] overflow-hidden"
					id="inner-header-container"
				>
					<Link
						href="#about"
						className={`${pathname === "/about" ? "text-[#dcaa7e]" : "text-[#adcae5]"}`}
						id="nav-link"
					>
						ABOUT
					</Link>
					<Link
						href="#work"
						className={`${pathname === "/work" ? "text-[#dcaa7e]" : "text-[#adcae5]"}`}
						id="nav-link"
					>
						WORK
					</Link>

					<Link href="/" id="nav-logo">
						<Image
							src="/logos/logo.png"
							alt="Logo"
							width={80}
							height={80}
							className=""
							id=""
						/>
					</Link>

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
