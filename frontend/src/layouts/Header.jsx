import React from "react";
import NavBar from "../components/Navbar";
import SiteLogo from "../components/SiteLogo";

/**
 * Header component
 */

export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full h-24 flex items-center justify-bewteen px-12 bg-black z-10">
			<SiteLogo/>
			<NavBar/>
		</header>
	);
}
