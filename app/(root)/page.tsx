import React from "react";
import EntryAnimation from "../../components/EntryAnimation";

const page = () => {
	return (
		<>
			{/* <EntryAnimation /> */}

			<div>
				<div className="h-screen pt-20 flex flex-col justify-center font-semibold uppercase">
						<h1 className="text-3xl sm:text-8xl tracking-wide text-center text-text-light pb-4">
							Aidan<br/>McDonald
						</h1>
						<h2 className="text-4xl sm:text-3xl text-center tracking-[.5em] text-[#dcaa7e]">
							Developer
						</h2>
				</div>
			</div>
		</>
	);
};

export default page;
