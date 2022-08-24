import React from "react";
import "./header.css";

import Logo from "../../assets/gravity-logo-white.png";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav container">
				<a href="#home" className="nav__logo">
					<img src={Logo} alt="Gravity Logo" />
				</a>
				<a href="#download" className="download-btn btn">
					Download
				</a>
			</nav>
		</header>
	);
};

export default Header;
