"use client"

import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { useAnimation } from '../AnimationContext';
import { useEffect, useState } from 'react';



const EntryAnimation = () => {
	// if (typeof window === "undefined") return null;
	// const windowWidth = window.innerWidth;
    // console.log(windowWidth)

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


    const { setAnimationTrigger } = useAnimation();

    useGSAP(() => {
        const swipeDuration = 1;

        const entryTimeline = gsap.timeline();

        // Text enters
        entryTimeline
        .to("#entry-animation-container", {
            visibility: "visible",
            duration: 0.01,
        }, "<")
        .to("#initial-entry", {
            y: 0,
            duration: 2,
            ease: "expo.inOut",
            delay: 0,
            color: "#E1EAF1"
        }, "<")
        .to("#word1", {
            y: 0,
            duration: 2,
            delay: 0.05,
            ease: "expo.inOut",
            color: "#E1EAF1"
        }, "<")

        // BG-1 - Blue moves away
        .to("#container-bg-1", {
            y: "-100%",
            duration: swipeDuration,
            ease: "power3.inOut", 
        })
        .to("#word1", {
            y: -150,
            duration: 1,
            delay: 0.05,
            ease: "expo.inOut",
        }, "<")
        .to("#word2", {
            y: 0,
            duration: 1,
            ease: "expo.inOut",
            color: "#E1EAF1"
        }, "<")
        .to('.dev-text', {
            color: "#E1EAF1",
            delay: 0.22
        }, "<")
        .to('.h1-text', {
            color: "#E1EAF1",
            delay: 0.1
        }, "<")


        // BG-2 - Green moves away
        .to("#container-bg-2", {
            y: "-100%",
            duration: swipeDuration,
            ease: "power3.inOut", 
        })
        .to("#word2", {
            y: -150,
            duration: 1,
            delay: 0.05,
            ease: "expo.inOut",
        }, "<")
        .to("#word3", {
            y: 0,
            duration: 1,
            ease: "expo.inOut",
        }, "<")
        .to('.dev-text', {
            color: "#E1EAF1",
            delay: 0.4
        }, "<")
        .to('.h1-text', {
            color: "#E1EAF1",
            delay: 0.05
        }, "<")
        

        // BG-3 - Red moves away
        .to("#container-bg-3", {
            y: "-100%",
            duration: swipeDuration,
            ease: "power3.inOut", 
        })
        .to("#word4", {
            color: "#E1EAF1"
        }, "<")
        .to("#word3", {
            y: -150,
            duration: 1,
            delay: 0.05,
            ease: "expo.inOut",
        }, "<")
        .to("#word4", {
            y: 0,
            duration: 1,
            ease: "expo.inOut",
        }, "<")
        .to('.dev-text', {
            color: "#E1EAF1",
            delay: 0.18
        }, "<")
        .to('.h1-text', {
            color: "#E1EAF1",
            delay: 0.1 
        }, "<")


       // BG-4 - Orange moves away and fade to homepage / bring in header etc.
       .to("#text-container", {
        zIndex: 28,
       }, "<")
        .to("#container-bg-3", {
            y: 0,
            duration: 0.8,
            ease: "power3.inOut", 
        })
        .to("#container-bg-2", {
            y: 0,
            duration: 0.8,
            ease: "power3.inOut", 
            delay: 0.2
        }, "<")
        .to("#text-container", {
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut", 
        }, "<")
        .to("#container-bg-1", {
            y: 0,
            duration: 0.8,
            ease: "power3.inOut", 
            delay: 0.2
        }, "<")
        .to("#inner-text-container", {
            opacity: 0,
            onComplete: () => {
                // console.log("entry animation complete")
                setAnimationTrigger(true);
                // console.log("animation trigger set to true")
            },  
        })
        .to("#entry-animation-container", {
            opacity: 0,
        }, "<")
        .to("*", {
            overflow: "initial"
        }, "<")
        .to("body", {
            overflowX: "clip",
        }, "<")
        .to("#entry-animation-container", {
            display: "none",
        })
 
        }, [setAnimationTrigger]);


        


    return (
        <>
        <div id='entry-animation-container'>
        {/* Starting (blue) Container */}
        <div className='h-screen p-10 bg-1 absolute top-0 left-0 z-40 w-full' id="container-bg-1"></div>
        <div className='h-screen sm:p-10 absolute top-0 left-0 z-50 w-full flex flex-col justify-center' id="text-container">
            <div id='inner-text-container'>
                <div><h1 className='text-2xl sm:text-4xl lg:text-5xl uppercase font-semibold h1-text pl-8 sm:pl-16 lg:pl-28 sm:pb-2 tracking-wide text-text-light' id="initial-entry">your go-to</h1></div>
                <div className='pl-8 sm:pl-16 lg:pl-28 sm:pb-2'>
                  <div className="text-wrapper"><h1 className='text-4xl sm:text-7xl lg:text-8xl uppercase font-semibold h1-text text-text-light' id='word1'>Front-End</h1></div>
                  <div className="text-wrapper"><h1 className='text-4xl sm:text-7xl lg:text-8xl uppercase font-semibold h1-text text-text-light' id='word2'>Back-End</h1></div>
                  <div className="text-wrapper"><h1 className='text-4xl sm:text-7xl lg:text-8xl uppercase font-semibold h1-text text-text-light' id='word3'>Full-Stack</h1></div>
                  <div className="text-wrapper"><h1 className='text-4xl sm:text-7xl lg:text-8xl uppercase font-semibold h1-text text-text-light' id='word4'>Solutions</h1></div>
                </div>
                <div><h1 className='text-4xl sm:text-7xl lg:text-8xl'>&nbsp;</h1></div>
                <div><h1 className='text-4xl sm:text-7xl lg:text-8xl uppercase font-semibold dev-text block pl-12 sm:pl-20 lg:pl-48 text-text-light' id="initial-entry">Developer.</h1></div>
            </div>
        </div>
        
        {/* Second (green) Container */}
        <div className='h-screen p-10 bg-2 absolute top-0 left-0 z-30 w-full flex flex-col gap-10' id="container-bg-2">
        </div>
        {/* Third (red) Container */}
        <div className='h-screen p-10 bg-3 absolute top-0 left-0 z-[29] w-full' id="container-bg-3"></div>
        {/* Fourth (orange) Container */}
        <div className='h-screen p-10 bg-4 absolute top-0 left-0 z-[27] w-full' id="container-bg-4"></div>
        {/* <Header /> */}
        </div>

        </>
    );
};

export default EntryAnimation;

