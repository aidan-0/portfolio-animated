import React from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { useGSAP } from "@gsap/react";
import "./Portfolio.css";


const Portfolio = () => {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); 
         
        let tlPortfolio = gsap.timeline({
            scrollTrigger: {
              trigger: "#portfolio",
              start: "top top",
              end: "+=100px",
              markers: true,
              scrub: 1,
            },
            defaults: { ease: "none" }
          });



        tlPortfolio
        .to("body", {
            background: "#9297e2",
        })
        .fromTo("#portfolio", {
            background: "#9297e2",
        }, {
            background: "radial-gradient(circle at top center, rgba(200,113,55,1) 0%, rgba(154,53,20,1) 100%)",
            duration: 1,
        });

    });


	return (
		<div>
            {/* swipe to orange on animation */}
			<section id="portfolio">
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
					<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-[#261d06] pb-4">
						2nd
						<br />
						Section
					</h1>
					<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-text-light">
						Bottom Text
					</h2>
				</div>
			</section>
		</div>
	);
};

export default Portfolio;
