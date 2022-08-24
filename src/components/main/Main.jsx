import React from "react";

import Header from "../header/Header";
import Hero from "../hero/Hero";
import Features from "../features/Features";
import Waitlist from "../waitlist/Waitlist";
import Download from "../download/Download";
import Footer from "../footer/Footer";

const main = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<Waitlist />
			<Download />
			<Footer />
		</div>
	);
};

export default main;
