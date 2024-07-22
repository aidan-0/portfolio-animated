"use client";

import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "../AnimationContext";
import TransitionLink from "../TransitionLink";
import ContactModal from "./ContactModal";
import { ClosedMenu, OpenMenu } from "./Icons";

const Header = () => {
	const pathname = usePathname();
	const { animationTrigger } = useAnimation();
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const navSvgRef = useRef<HTMLImageElement | null>(null);
	const navMenuRef = useRef<HTMLDivElement | null>(null);
	const mobileHeaderRef = useRef<HTMLDivElement | null>(null);
	const [isContactModalOpen, setContactModalOpen] = useState(false);
	const [isNavOpen, setNavOpen] = useState(false);
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
		if (!animationTrigger || typeof window === "undefined") return;

		const mm = gsap.matchMedia();

		// Desktop animations
		mm.add("(min-width: 768px)", () => {
			gsap.registerPlugin(ScrollTrigger);

			const timeline = gsap.timeline();
			timelineRef.current = timeline;

			if (pathname === "/") {
				timeline
					.to("#outer-header-container", {
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
						{
							duration: 2,
							y: 0,
							stagger: 0.05,
							ease: "elastic.out(1.15, 1)",
						},
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
					)
					.from(
						"#nav-link",
						{
							opacity: 0,
							delay: 0.2,
							duration: 1.5,
						},
						"<",
					);
			} else {
				timeline
					.to("#outer-header-container", {
						opacity: 1,
						duration: 1,
						ease: "power1.inOut",
					})
					.from(
						"#header-container",
						{
							duration: 1,
							width: "70px",
							alignContent: "center",
						},
						"<",
					)
					.from(
						"#nav-link",
						{
							opacity: 0,
							delay: 0.2,
							duration: 1.5,
						},
						"<",
					);
			}

			const hoverAnimation = gsap.to(navSvgRef.current, {
				background: "linear-gradient(45deg, #f88f7f, #fbcb85)",
				boxShadow: "rgba(153, 153, 153, 0.1) 0px 0px 8px 4px",
				scale: 0.96,
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
		});

		// Mobile animations
		mm.add("(max-width: 767px)", () => {
			gsap.registerPlugin(ScrollTrigger);
			const timeline = gsap.timeline();
			timelineRef.current = timeline;

            if (pathname === "/") {

			gsap.set("#mobile-header", { opacity: 0, yPercent: -100 });
			timeline
				.to("#mobile-header", {
					opacity: 1,
					yPercent: 0,
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
					{
						duration: 2,
						y: 0,
						stagger: 0.05,
						ease: "elastic.out(1.15, 1)",
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
            }
		});
	}, [animationTrigger, pathname, windowWidth]);

	const handleLogoClick = (e: React.MouseEvent) => {
		if (timelineRef.current && pathname === "/") {
			timelineRef.current.restart();
		} else {
			e.preventDefault();
			window.location.href = "/";
		}
	};

	const handleContactClick = (e: React.MouseEvent) => {
		setContactModalOpen((prevContactModalOpen) => !prevContactModalOpen);
		e.preventDefault();

		if (isNavOpen) {
			toggleNav();
		}
	};

	const toggleNav = () => {
		setNavOpen((prevNavOpen) => !prevNavOpen);
		if (!isNavOpen) {
			gsap.fromTo(
				"#mobile-nav-menu",
				{
					display: "none",
					yPercent: -100,
					zIndex: 40,
				},
				{
					display: "block",
					yPercent: 0,
					opacity: 1,
					duration: 0.5,
					ease: "power1.inOut",
				},
			);
		} else {
			gsap.to("#mobile-nav-menu", {
				yPercent: -100,
				opacity: 0,
				duration: 0.5,
				ease: "power1.inOut",
				onComplete: () => {
					gsap.set("#mobile-nav-menu", { display: "none" });
				},
			});
		}
	};

	return (
		<>
			{windowWidth < 768 ? (
				<>
					<div
						className="fixed top-0 left-0 right-0 z-50 w-screen px-5 bg-[#14141450] border-b-[#d8d8d888] border-b shadow-sm opacity-100"
						id="mobile-header"
						ref={mobileHeaderRef}
					>
						<div className="z-60 flex justify-between items-center h-[80px]">
							<div onClick={handleLogoClick}>
								<Link href="/" id="nav-logo nav-link">
									<Image
										ref={navSvgRef}
										src="/logos/logo.png"
										alt="Logo"
										width={40}
										height={40}
										className=""
										id="nav-svg"
									/>
								</Link>
							</div>
							{isNavOpen ? (
								<OpenMenu
									onClick={toggleNav}
									className="text-text-light h-10 w-10"
								/>
							) : (
								<ClosedMenu
									onClick={toggleNav}
									className="text-text-light h-10 w-10"
								/>
							)}
						</div>
					</div>

					<div
						className="fixed top-0 left-0 w-full bg-[#14141450]  border-b-[#d8d8d888] border-b  shadow-lg z-40 mt-[81px] rounded-b-2xl"
						id="mobile-nav-menu"
						ref={navMenuRef}
					>
						<div className="flex flex-col p-6 gap-5 font-semibold items-center">
							<div onClick={toggleNav}>
								<TransitionLink href="/tech" label="TECH" />
							</div>
							<div onClick={toggleNav}>
								<TransitionLink href="/portfolio" label="PORTFOLIO" />
							</div>
							<div onClick={toggleNav}>
								<Link
									href="https://github.com/aidan-0/portfolio-animated/raw/main/public/Resume-Aidan-McDonald.pdf"
									download="Resume-Aidan-McDonald.pdf"
									id="nav-link"
								>
									RESUME
								</Link>
							</div>
							<div
								id="nav-link"
								className="cursor-pointer"
								onClick={handleContactClick}
							>
								CONTACT
							</div>
						</div>
					</div>
				</>
			) : (
				<div
					className="opacity-0 flex justify-center top-0 absolute pt-4"
					id="outer-header-container"
				>
					<header
						className="w-[80%] items-center overflow-hidden"
						id="header-container"
					>
						<div
							className="flex items-center justify-between py-5 font-semibold text-[18px] overflow-hidden"
							id="inner-header-container"
						>
							<TransitionLink href="/tech" label="TECH" />
							<TransitionLink href="/portfolio" label="PORTFOLIO" />

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
								href="https://github.com/aidan-0/portfolio-animated/raw/main/public/Resume-Aidan-McDonald.pdf"
								download="Resume-Aidan-McDonald.pdf"
								id="nav-link"
							>
								RESUME
							</Link>
							<div
								id="nav-link"
								className="cursor-pointer"
								onClick={handleContactClick}
							>
								CONTACT
							</div>
						</div>
					</header>
				</div>
			)}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setContactModalOpen(false)}
			/>
		</>
	);
};

export default Header;
