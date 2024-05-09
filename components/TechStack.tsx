"use client";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const page = () => {

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);


		const tlTeckStack = gsap.timeline({
			scrollTrigger: {
			  trigger: "#tech-stack-container",
			  start: "top top",
			  end: "+=700",
			  scrub: 1,
			  markers: true,
			  pin: true,
			},
		  });
	});

	return (
		<div id="tech-stack-container" className="h-screen">
			<section id="section1">
				<div id="blueBoxContainer">
					<h3 id="title1">
						We are the perfect combination of<br></br> robotic and human teams
					</h3>
					<h4 id="subtitle1">
						Alderton & Company are based in the Perth CBD providing first-class
						Accounting, Taxation, Corporate Services, & related Automation
						services.
					</h4>
				</div>
			</section>
		</div>
	);
};

export default page;
