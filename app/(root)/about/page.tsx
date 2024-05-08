import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section id="home-section1" className="h-screen flex flex-row px-[20%]">
        {/* text */}
        <div
          className="w-[60%]  flex flex-col justify-center font-[500]  text-text-light text-3xl tracking-wider leading-10"
          id="aidan-mcdonald-div"
        >
          <div id="hero-text-inner-container">
            <span className="" id="hidden-intro-text">
              Hi, I'm{" "}
            </span>
            <span
              className="tracking-wide text-center pb-4"
              id="hero-main-text"
            >
              Aidan McDonald
            </span>
            <span className="" id="hidden-intro-text">
              {" "}a <br/>passionate Web{" "}
            </span>
            <span className="text-center" id="hero-sub-text">
              Developer <br/>from Perth.
            </span>
          </div>
        </div>

        {/* image */}
        <div
          id="hero-image-container"
          className="w-[40%] flex justify-center items-center">
          <Image
            id="hero-image"
            className="justify-center align-middle items-center rounded-t-full"
            width={200} height={200}
            src="/headshot.png"
            alt="Aidan McDonald"
            />
          </div>

      </section>
    </>
  );
};

export default page;
