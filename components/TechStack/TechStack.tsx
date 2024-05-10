"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { useGSAP } from "@gsap/react";
import "./TechStack.css";
 

const TechStack = () => {
    
    useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger); 
    let boxSection = document.getElementById('boxSection');
    let boxTitle1 = document.getElementById('boxTitle1')
    let boxSubtitle1 = document.getElementById('boxSubtitle1')
    let boxContainer = document.getElementById('boxContainer');
 
    gsap.set(boxTitle1, {
      color: '#FFFFFF',
      top: '70%',
      left: '40%',
      position: 'absolute'
    });
 
    gsap.set(boxContainer, {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: "0px",
        width: "100vw",
        height: "100vh",
        transformOrigin: "50% 50%"
    });




    gsap.set("#boxSection", {
      transformStyle: "preserve-3d"
    });
    gsap.set("#boxSection div", {
      transformStyle: "preserve-3d",
      transformOrigin: "50% 50% -50px",
      transformPerspective: 1000
    });



    


    let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: boxSection,
          start: "top top",
          end: "+=2000px",
          markers: true,
          scrub: 1,
          pin: boxSection,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" }
      });

    // Orange Section  
    tl1
    .to(boxTitle1, { opacity: 1, fontSize: '75px' })
    .to(boxTitle1, { top: "30%", left: "15%", duration: 6, color: "#FFFFFF"}, "<")
    .to(boxTitle1, {duration: 3, position:'fixed',top:"25%", left:"10%"})

    .to(boxContainer, {duration:6, width: "85vw", height: "74vh", marginTop: "13vh", borderRadius: "50px" })
    // Box is pinned
    .to(boxTitle1, {fontSize:"40px", fontWeight: '700' ,duration: 4, position:'absolute',top:"100px", left:"100px"}, "<")
    .to(boxSubtitle1, {position: 'absolute', bottom:"100px", right:"100px", }, "<")

    // Text move up and down
    .to(boxSubtitle1, {opacity:1, duration: 2, position: 'absolute', bottom:"100px", right:"100px", y: -30, color:"#0a1117"})
    .to(boxTitle1, {y: 30, duration: 2, color:"#0a1117"}, "<")
    .to("#boxContainer", {duration: 2, background: "#9297e2"}, "<")

    // text move left and right
    .to(boxSubtitle1, {duration: 6, x: -40})
    .to(boxTitle1, {duration: 6, x: 40}, "<")



  });



 
  return (
    <div id="tech">
      <section id="boxSection">
        <div id="boxContainer">
          <h3 id="boxTitle1">My Tech Stack</h3>
          <h4 id="boxSubtitle1">Here's what i've been working with</h4>
        </div>
      </section>
    </div>
  );
}
 





// <div
//     className=" flex flex-col justify-center tracking-wider font-semibold pt-20 text-text-light"
//     id="tech-stack-container-inner"
// >
//     <div id="section1">
//         <div id="blueBoxContainer">
//             <h3 id="title1">
//                 We are the perfect combination of<br></br> robotic and human
//                 teams
//             </h3>
//             <h4 id="boxSubtitle1">
//                 Alderton & Company are based in the Perth CBD providing
//                 first-class Accounting, Taxation, Corporate Services, & related
//                 Automation services.
//             </h4>
//         </div>
//     </div>
// </div>
// </section>
 
export default TechStack;