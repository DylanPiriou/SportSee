import React from "react";
import NavBar from "./Navbar";
import SiteLogo from "./SiteLogo";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full h-28 flex items-center justify-bewteen px-12 bg-black z-10">
			<SiteLogo/>
			<NavBar/>
		</header>
	);
}
