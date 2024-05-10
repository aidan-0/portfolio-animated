"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { useGSAP } from "@gsap/react";
import "./TechStack.css";
import Image from "next/image";
 

const TechStack = () => {
    
    useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger); 
    let boxSection = document.getElementById('boxSection');
    let boxTitle1 = document.getElementById('boxTitle1')
    let boxSubtitle1 = document.getElementById('boxSubtitle1')
    let boxContainer = document.getElementById('boxContainer');
    let marqueeContainer = document.getElementById('marqueeContainer');
    let tech = document.getElementById('tech');

 
    gsap.set(boxTitle1, {
      color: '#FFFFFF',
      top: '70%',
      left: '70%',
      position: 'absolute',
      overflow: 'hidden',
      width: '50%',
      opacity: 0,
    });
 
    gsap.set(boxContainer, {
        // position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: "0px",
        width: "100vw",
        height: "100vh",
        // transformOrigin: "50% 50%"
    });
   

    gsap.set(marqueeContainer, {
        opacity: 0,
        y: 20,
    })


    let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: tech,
          start: "top top",
          end: "+=2500px",
          markers: true,
          scrub: 1,
          pin: tech,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" }
      });

    // Purple Section  
    tl1
    .to(boxTitle1, { opacity: 1, duration: 3})
    .to(boxTitle1, { top: "30%", left: "15%",  duration: 6, color: "#FFFFFF"}, "<")
    .to(boxTitle1, {duration: 3, position:'fixed',top:"25%", left:"10%"})


    .to(boxContainer, {duration:6, width: "85vw", height: "74vh", marginTop: "13vh", borderRadius: "50px" })
    // Box is pinned
    .to(boxTitle1, {fontSize:"40px", fontWeight: '700' ,duration: 4, position:'absolute',top:"35px", left:"50px"}, "<")
    .to(boxSubtitle1, {position: 'absolute', bottom:"35px", right:"50px", fontWeight: 600, color: "#FFFFFF", width: "50%"}, "<")

    // Text move up and down
    .to(boxSubtitle1, {opacity:1, duration: 2, y: -30, color:"#0a1117"})
    .to(boxTitle1, {y: 30, duration: 2, color:"#0a1117"}, "<")
    .to(boxContainer, {duration: 2, background: "#9297e2"}, "<")
    .to(marqueeContainer, {duration: 2, opacity: 1, y: 0}, "<")

    // text move left and right
    .to(boxSubtitle1, {duration: 7, x: -40})
    .to(boxTitle1, {duration: 8, x: 40}, "<")

    // Box expands
    .to(boxContainer, {duration: 6, width: "100vw", height: "100vh", borderRadius: 0, marginTop: 0})

    gsap.set(tech, {
        y: -1000
    })
  })


 
  return (
    <>
    <div id="tech" className="z-10">
      <section id="boxSection">
        <div id="boxContainer" className="flex justify-center">
          <h3 id="boxTitle1">My Tech Stack</h3>
          <div className="flex flex-col gap-5 justify-center items-center" id="marqueeContainer">
            <span>scrolling logos</span>
            <Image src="/logos/logo.png" alt="Tech Stack" width={100} height={100} />
            <span>scrolling logos</span>
          </div>
          <h4 id="boxSubtitle1">Here's what i've been working with</h4>
        </div>
      </section>
    </div>
    {/* <div id="projects">
      <section id="boxSection2">
        <div id="boxContainer2">
          <h3 id="boxTitle2">My Projects</h3>
          <h4 id="boxSubtitle2">Here's a look at what i've made</h4>
        </div>
      </section>
    </div> */}
    </>
  );
}
 
 
export default TechStack;