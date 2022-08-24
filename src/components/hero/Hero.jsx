import React from "react";
import "./hero.css";

import HomeImg from "../../assets/home-img2.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const Hero = () => {
	return (
		<section className="home grid" id="home">
			<div className="home__container">
				<div className="home__content container">
					<div className="launching">
						<span className="launching-text">
							Launching soon. Be the first to know!
						</span>
						<a href="#waitlist" className="launching-btn">
							<div className="launching-icon">
								<FaLongArrowAltRight />
							</div>
						</a>
					</div>

					<div className="home__text">
						<h1 className="home__title">
							Your Banking & Business In One Place
						</h1>
						<p className="home__description">
							One app for managing your banking and business. Quick to sign up
							and easy to use. Dedicated to helping you succeed.
						</p>
					</div>

					<div className="home__btn">
						<a href="#features" className="down-arrow">
							<FaLongArrowAltDown />
						</a>
						<a href="#waitlist" className="get-started-btn btn">
							Get Started
						</a>
					</div>
				</div>
			</div>

			<img src={HomeImg} alt="" />
		</section>
	);
};

export default Hero;
