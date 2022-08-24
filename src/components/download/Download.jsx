import React from "react";
import "./download.css";

import Apple from "../../assets/app-store.png";
import Android from "../../assets/play-store.png";

const Download = () => {
	return (
		<section className="section download" id="download">
			<div className="container download__container">
				<h2 className="section__title download__title">
					Download the app to get started
				</h2>
				<div className="download__btns">
					<div className="app__store-btn">
						<button className="btn-store" disabled>
							<span className="btn-store-icon">
								<img src={Apple} alt="Apple Logo" />
							</span>
							<span className="btn-store-text">
								soon on <br /> <b> app store </b>
							</span>
						</button>
					</div>
					<div className="app__store-btn">
						<button className="btn-store" disabled>
							<span className="btn-store-icon">
								<img src={Android} alt="Android Logo" />
							</span>
							<span className="btn-store-text">
								soon on <br /> <b> play store </b>
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Download;
