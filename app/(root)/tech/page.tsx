import React from "react";

const page = () => {
  return (
    <>
      <section
			id="tech-bg"
			className="h-screen w-screen flex justify-center align-middle items-center z-20"
		>
			<div
				className="h-screen w-screen flex flex-col justify-center tracking-wider font-semibold pt-20 text-text-light"
				id=""
			>
				<span
					className="text-3xl text-center font-[500] text-[#dcaa7e] pt-24"
					id=""
				>
					Hi, I'm
				</span>
				<span className="text-3xl sm:text-8xl text-center" id="">
					AIDAN
				</span>
				<span className="text-3xl sm:text-8xl text-center pb-36" id="">
					MCDONALD
				</span>

				<div
					className="w-[1000px] pl-[10%] text-2xl font-[400] flex flex-col leading-9"
					id="mini-bio-div"
				>
					<span className="mini-bio-text ">
						A dedicated Web Developer from Perth,
						<br />
					</span>
					<span className="mini-bio-text">
						specialising in{" "}
						<span className="italic text-[#dcaa7e] font-medium">designing</span>{" "}
						and{" "}
						<span className="italic font-medium text-[#dcaa7e]">
							developing
						</span>{" "}
						<br />
					</span>
					<span className="mini-bio-text ">advanced client solutions.</span>
				</div>
			</div>
		</section>
    </>
  );
};

export default page;
