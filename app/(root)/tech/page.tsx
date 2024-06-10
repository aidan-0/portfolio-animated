"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./TechStack.css";
import Image from "next/image";
import { techLogos } from "@/components/data";

const page = () => {
  useGSAP(() => {
    const techTl = gsap.timeline();


	//Load in animations
    techTl
      .to(
        "#animation-id",
        {
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        },
        0
      )
      .to(
        "#transition-element",
        {
          zIndex: 0,
        },
        "<"
      )

  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let boxTitle1 = document.getElementById("boxTitle1");
    let boxSubtitle1 = document.getElementById("boxSubtitle1");
    let boxContainer = document.getElementById("boxContainer");
    let marqueeContainerTop = document.getElementById("marqueeContainerTop");
    let marqueeContainerBottom = document.getElementById(
      "marqueeContainerBottom"
    );
    let tech = document.getElementById("tech");

	//TODO: fix fouc
    gsap.set(boxTitle1, {
      color: "#FFFFFF",
      top: "50%",
      left: "50%",
      position: "absolute",
      overflow: "hidden",
      xPercent: -50,
      yPercent: -50,
      textAlign: "center",
    });

	gsap.set(boxSubtitle1, {
		color: "#FFFFFF",
		top: "60%",
		left: "50%",
		position: "absolute",
		overflow: "hidden",
		xPercent: -50,
		yPercent: -50,
		textAlign: "center",
	})

    gsap.set(boxContainer, {
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "0px",
      width: "100vw",
      height: "100vh",
    });

    gsap.set(marqueeContainerTop, {
      y: "42vh",
    });
    gsap.set(marqueeContainerBottom, {
      y: "-30vh",
    });

	//SCROLLING - TODO: Fix the scrolling
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: tech,
        start: "top top",
        end: "+=1000px",
        markers: true,
        scrub: 1,
        pin: tech,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    tl1
      // Scrolling text move left and right
      .to(boxTitle1, { duration: 3, xPercent: -25 }, "<")
      .to(boxSubtitle1, { duration: 3, xPercent: 25 }, "<");
  });

  return (
    <>
      <div id="animation-id">
        <div id="tech" className="z-10">
          <section id="boxSection">
            <div
              id="boxContainer"
              className="flex justify-center overflow-hidden"
            >
              <h3 id="boxTitle1" className="lg:text-7xl  2xl:text-8xl">
                TECH STACK
              </h3>
			  <h4 id="boxSubtitle1" className="tracking-[1]">
                Here's what i've been working with
              </h4>
              <div className="flex flex-col gap-20 justify-center items-center">
                <div className="marquee w-full" id="marqueeContainerTop">
                  <ul className="marquee-content justify-center items-center">
                    {techLogos.map((logo, index) => (
                      <li key={index}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={50}
                          height={50}
                          className="tech-logo"
                        />
                      </li>
                    ))}
                  </ul>

                  <ul
                    aria-hidden="true"
                    className="marquee-content justify-center items-center"
                  >
                    {techLogos.map((logo, index) => (
                      <li key={index}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={50}
                          height={50}
                          className="tech-logo"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="marquee w-full" id="marqueeContainerBottom">
                  <ul className="marquee-content marquee-reverse justify-center items-center">
                    {techLogos.map((logo, index) => (
                      <li key={index}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={50}
                          height={50}
                          className="tech-logo"
                        />
                      </li>
                    ))}
                  </ul>
                  <ul
                    aria-hidden="true"
                    className="marquee-content marquee-reverse justify-center items-center"
                  >
                    {techLogos.map((logo, index) => (
                      <li key={index}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={50}
                          height={50}
                          className="tech-logo"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
