"use client";

import React from "react";
import EntryAnimation from "../../components/ui/EntryAnimation";
import Image from "next/image";


const page = () => {


	
	return (
		<>
			{/* <EntryAnimation /> */}

			{/* Aidan McDonald */}
			<section id="home-section1">
				<div className="h-screen flex flex-col justify-center font-semibold uppercase pt-60 opacity-0" id="aidan-mcdonald">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
							Aidan<br/>McDonald
						</h1>
						<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
							Developer
						</h2>
				{/* <div className="absolute bottom-[10%] right-[10%]">
					position absolute down arrow
				</div> */}
				</div>
			</section>

			{/* About */}
			<section id="home-section2">
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
							2nd<br/>Section
						</h1>
						<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
							Bottom Text
						</h2>
				</div>
			</section>

			<section>
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
							3rd<br/>Section
						</h1>
						<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
							Bottom Text
						</h2>
				</div>
			</section>
			<section>
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
							4th<br/>Section
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
