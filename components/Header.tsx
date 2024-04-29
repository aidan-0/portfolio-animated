"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { TimelineContext } from "./TimelineContext";


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
        const timeline = gsap.timeline();

        timeline.from("#header-container", {
            duration: 1.2,
            ease: "power3.inOut",
            width: "70px",
            alignContent: "center",
        }),
        timeline.from("#nav-link", {
            opacity: 0,
			delay: 0.5,
            duration: 1.5,
        }, "<")

    }, []);


	return (
		<div className="p-5 flex justify-center" >
		<header className="w-[80%] items-center rounded-full bg-white" id="header-container">
			<div className="flex items-center justify-between px-36 py-5 font-semibold text-[18px]">
				{navLinks.map((link) => {
					const isActive = pathname === link.href;

					return (
						<Link
							key={link.name}
							href={link.href}
							className={`${
								isActive ? "text-[#f3c12a]" : "text-[#11395f]"
							}`}
							id="nav-link"
						>
							{link.name}
						</Link>
					);
				})}

				{/* <Link href="/about">ABOUT</Link>
				<Link href="/work">WORK</Link>

				<Link href="/">
					<Image src="/favicon.ico" alt="Logo" width={100} height={100} />
				</Link>

				<Link href="/resume">RESUME</Link>
				<Link href="/contact">CONTACT</Link> */}
			</div>
		</header>
		</div>
	);
};

export default Header;
