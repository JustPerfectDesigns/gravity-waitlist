import React from "react";
import "./footer.css";

import Logo from "../../assets/gravity-logo-white.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer section">
			<div className="container footer__container">
				<div className="footer__logo">
					<img src={Logo} alt="Gravity Logo" />
				</div>
				<p className="copyright">&copy; All rights reserved | Gravity Africa</p>
				<div className="footer__socials">
					<a href="#">
						<FaFacebookF />
					</a>
					<a href="#">
						<FaInstagram />
					</a>
					<a href="#">
						<FaTwitter />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
