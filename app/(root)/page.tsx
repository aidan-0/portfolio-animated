"use client";

import React from "react";
import EntryAnimation from "../../components/ui/EntryAnimation";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const page = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlHeroSection = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-section1",
        start: "top top",
        end: "+=700",
        scrub: 1,
        markers: true,
        pin: true,
      },
    });

    //Hero text exit animation
    tlHeroSection
      .to("#hero-main-text", {
        fontSize: "5rem",
        opacity: 0,
        // duration: 1,
      })
      .to(
        "#hero-sub-text",
        {
        //   fontSize: "1.2rem",
          opacity: 0,
          // duration: 1,
        },
        "<"
      )
      .fromTo(
        "#nav-link",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          // duration: 2,
        },
        "<"
      )
      .fromTo(
        "#header-container",
        {
          opacity: 1,
          width: "80%",
        },
        {
          // duration: 2,
          width: "50%",
          opacity: 0,
        },
        "<"
      )

      .to("#aidan-mcdonald-div", {
        display: "none",
      })

      .to("#bio-outer-container", {
        opacity: 1,
        display: "flex",
        duration: 1,
      });
  });

  return (
    <>
      {/* <EntryAnimation /> */}

      {/* Aidan McDonald */}
      <section id="home-section1">
        <div
          className="h-screen flex flex-col justify-center tracking-wide font-semibold pt-40 opacity-0 text-text-light"
          id="aidan-mcdonald-div"
        >
          <span
            className="text-3xl text-center font-[500] text-[#dcaa7e] pt-24"
            id="hero-sub-text"
          >Hi, I'm</span>
          <span
            className="text-3xl sm:text-8xl text-center "
            id="hero-main-text"
          >AIDAN
          </span>
          <span
            className="text-3xl sm:text-8xl text-center pb-36"
            id="hero-main-text"
          >MCDONALD
          </span>
		  
          <div className="w-[1000px] pl-[10%] text-xl font-[400]"
		  id="mini-bio-div">
            <span id="mini-bio-text">
              I'm a dedicated Web Developer from Perth.<br/>
            </span>
            <span id="mini-bio-text">
			  I specialise in <span style="font-family: ">designing</span> and <span>developing</span>> <br/>
            </span>
            <span id="mini-bio-text">
			  advanced client solutions.
            </span>
          </div>
        </div>

        {/* About */}
        <div id="about">
          <div
            id="bio-outer-container"
            className="hidden opacity-0 h-screen items-center"
          >
            <div
              className="w-[60%] justify-center font-[500] text-text-light text-3xl tracking-wider leading-10"
              id="bio-text-container"
            >
              <div id="bio-inner-container">
                <span className="">Hi, I'm </span>
                <span>Aidan McDonald</span>
                <span className="">
                  {" "}
                  a <br />
                  passionate Web{" "}
                </span>
                <span>
                  Developer <br />
                  from Perth.
                </span>
              </div>
            </div>

            {/* image */}
            <div
              id="hero-image-container"
              className="w-[40%] justify-center items-center"
            >
              <Image
                id="hero-image"
                className="justify-center align-middle items-center rounded-t-full"
                width={200}
                height={200}
                src="/headshot.png"
                alt="Aidan McDonald"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="work">
        <div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
          <h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
            2nd
            <br />
            Section
          </h1>
          <h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
            Bottom Text
          </h2>
        </div>
      </section>

      <section id="home-section3">
        <div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
          <h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
            3rd
            <br />
            Section
          </h1>
          <h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
            Bottom Text
          </h2>
        </div>
      </section>
      <section id="home-section4">
        <div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
          <h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
            4th
            <br />
            Section
          </h1>
          <h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
            Bottom Text
          </h2>
        </div>
      </section>
    </>
  );
};

export default page;
