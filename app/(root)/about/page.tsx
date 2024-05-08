import React from "react";

const page = () => {
  return (
    <>
      <div>Testing</div>
      <section id="home-section1" className="h-screen">
        <div
          className="w-[50%] flex flex-col justify-center font-semibold uppercase pt-60 text-text-light"
          id="aidan-mcdonald-div"
        >
          <div id="hero-text-inner-container" className="px-20">
            <span className="" id="hidden-intro-text">
              Hi, I'm{" "}
            </span>
            <span
              className="tracking-wide text-center pb-4 text-[#dcaa7e]"
              id="hero-main-text"
            >
              Aidan McDonald
            </span>
            <span className="" id="hidden-intro-text">
              {" "}a skilled web{" "}
            </span>
            <span className="text-center text-[#dcaa7e]" id="hero-sub-text">
              Developer
            </span>
            <span className="" id="hidden-intro-text">
              {" "} currently seeking opportunities where I can bring my unique
              blend of technical skills and creative vision to develop
              innovative web solutions that drive business success.{" "}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
