import React from "react";
import Yoga from "@/assets/yoga.svg";
import Swim from "@/assets/swim.svg";
import Bike from "@/assets/bike.svg";
import Training from "@/assets/training.svg";

export default function Sidebar() {
	return (
		<aside className="fixed left-0 top-0 w-28 h-full bg-black">
			<ul className="w-full h-full flex flex-col items-center justify-center gap-9">
				<li className="w-16 aspect-square flex items-center justify-center rounded-md bg-white">
					<a href="/">
						<img src={Yoga} alt="logo yoga" />
					</a>
				</li>
				<li className="w-16 aspect-square flex items-center justify-center rounded-md bg-white">
					<a href="/">
						<img src={Swim} alt="logo de natation" />
					</a>
				</li>
				<li className="w-16 aspect-square flex items-center justify-center rounded-md bg-white">
					<a href="/">
						<img src={Bike} alt="logo de cycliste" />
					</a>
				</li>
				<li className="w-16 aspect-square flex items-center justify-center rounded-md bg-white">
					<a href="/">
						<img src={Training} alt="logo de musculation" />
					</a>
				</li>
				<li className="text-white transform absolute -rotate-90 translate-y-80 whitespace-nowrap">
					Copyright, SportSee 2024
				</li>
			</ul>
		</aside>
	);
}
