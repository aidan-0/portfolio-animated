"use client"

import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { useAnimation } from '../AnimationContext';



const EntryAnimation = () => {
    const { setAnimationTrigger } = useAnimation();

    useGSAP(() => {
        const swipeDuration = 1;

        const entryTimeline = gsap.timeline();

        // Text enters
        entryTimeline.to("*", {
            overflow: "hidden",
            duration: 0.01,
        })
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
        })
        .to("#word1", {
            y: 0,
            duration: 2,
            delay: 0.05,
            ease: "expo.inOut",
            color: "#E1EAF1"
        }, "<")

        // BG-1 moves away
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
            color: "#111416"
        }, "<")
        .to('.dev-text', {
            color: "#111416",
            delay: 0.22
        }, "<")
        .to('.h1-text', {
            color: "#111416",
            delay: 0.1
        }, "<")


        // BG-2 moves away
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
            color: "#E1EAF1"
        }, "<")
        .to('.dev-text', {
            color: "#E1EAF1",
            delay: 0.4
        }, "<")
        .to('.h1-text', {
            color: "#E1EAF1",
            delay: 0.05
        }, "<")
        

        // BG-3 moves away (reveals bg-4)
        .to("#container-bg-3", {
            y: "-100%",
            duration: swipeDuration,
            ease: "power3.inOut", 
        })
        .to("#word4", {
            color: "#0A1117"
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
            color: "#0A1117",
            delay: 0.18
        }, "<")
        .to('.h1-text', {
            color: "#0A1117",
            delay: 0.1 
        }, "<")


       // BG-4 moves away and fade to homepage / bring in header etc.
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
        .to(".h1-text", {
            color: "#E1EAF1",
            onComplete: () => {
                console.log("entry animation complete")
                setAnimationTrigger(true);
                console.log("animation trigger set to true")
            },  
        })
        .to(".dev-text", {
            color: "#E1EAF1"
        }, "<")  
        .to("#entry-animation-container", {
            opacity: 0,
        }, "<")
        .to("*", {
            overflow: "visible"
        })
        .to("#entry-animation-container", {
            display: "none",
        })
 
        }, [setAnimationTrigger]);

    return (
        <>
        <div id='entry-animation-container'>
        {/* Starting Container */}
        <div className='h-screen p-10 bg-1 absolute top-0 left-0 z-40 w-full' id="container-bg-1"></div>
        <div className='h-screen p-10 absolute top-0 left-0 z-50 w-full flex flex-col justify-center' id="text-container">
            <div id='inner-text-container leading-10'>
                {/* maybe remove 'let me be' */}
                <div><h1 className='text-3xl sm:text-5xl uppercase font-semibold h1-text pl-28 pb-2 tracking-wide' id="initial-entry">your go-to</h1></div>
                <div className='pl-28 pb-2'>
                  <div className="text-wrapper"><h1 className='text-4xl sm:text-8xl uppercase font-semibold h1-text' id='word1'>Front-End</h1></div>
                  <div className="text-wrapper"><h1 className='text-4xl sm:text-8xl uppercase font-semibold h1-text' id='word2'>Back-End</h1></div>
                  <div className="text-wrapper"><h1 className='text-4xl sm:text-8xl uppercase font-semibold h1-text' id='word3'>Full-Stack</h1></div>
                  <div className="text-wrapper"><h1 className='text-4xl sm:text-8xl uppercase font-semibold h1-text text-text-dark' id='word4'>Solutions</h1></div>
                </div>
                <div><h1 className='text-4xl sm:text-8xl'>&nbsp;</h1></div>
                <div><h1 className='text-4xl sm:text-8xl uppercase font-semibold dev-text block pl-48' id="initial-entry">Developer.</h1></div>
            </div>

  
        </div>
        
        {/* Second Container */}
        <div className='h-screen p-10 bg-2 absolute top-0 left-0 z-30 w-full flex flex-col gap-10' id="container-bg-2">
        </div>
        {/* Third Container */}
        <div className='h-screen p-10 bg-3 absolute top-0 left-0 z-20 w-full' id="container-bg-3"></div>
        {/* Fourth Container */}
        <div className='h-screen p-10 bg-4 absolute top-0 left-0 z-10 w-full' id="container-bg-4"></div>
        {/* <Header /> */}
        </div>

        </>
    );
};

export default EntryAnimation;

