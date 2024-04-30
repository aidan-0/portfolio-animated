"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
	{
		href: "/about",
		name: "ABOUT",
	},
	{
		href: "/work",
		name: "WORK",
	},
	{
		href: "/",
		name: "LOGO",
	},
	{
		href: "/resume",
		name: "RESUME",
	},
	{
		href: "/contact",
		name: "CONTACT",
	},
];

const Header = () => {
	const pathname = usePathname();



	useGSAP(() => {
        const timeline = gsap.timeline({
            onStart: () => {
                document.body.style.overflow = 'hidden'; // Disable scrolling
            },
            onComplete: () => {
                document.body.style.overflow = 'visible'; // Enable scrolling
            }
        });



		timeline.from("#header-container", {
			    // delay: 6.3,
				duration: 1.2,
				ease: "power3.inOut",
				width: "70px",
				alignContent: "center",
			}),
			timeline.from("#nav-link",
				{
					opacity: 0,
					delay: 0.5,
					duration: 1.5,
				},
				"<",
			);

		const tlHeaderScroll = gsap.timeline({
			scrollTrigger: {
				trigger: "#outer-container",
				start: "top top",
				end: "+=100px",
				markers: true,
				scrub: 1,
			},
		});
		tlHeaderScroll
			.to("#nav-link", {
				opacity: 0,
			})
			.to("#header-container", {
				width: "70px"
			})
			.to("#outer-container", {
				paddingLeft: "70%",
				paddingRight: "10%",
			}, "<")


	}, []);

	return (
		<div className="p-5 flex justify-center sticky top-0" id="outer-container">
			<header
				className="w-[80%] items-center rounded-full bg-white shadow"
				id="header-container"
			>
				<div className="flex items-center justify-between px-36 py-5 font-semibold text-[18px]">
					{navLinks.map((link) => {
						const isActive = pathname === link.href;

						return (
							<Link
								key={link.name}
								href={link.href}
								className={`${isActive ? "text-[#f3c12a]" : "text-[#11395f]"}`}
								id="nav-link"
							>
								{link.name}
							</Link>
						);
					})}
				</div>
			</header>
		</div>
	);
};

export default Header;
