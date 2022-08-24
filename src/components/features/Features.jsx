import React from "react";
import "./features.css";

import Transfer from "../../assets/transfer-icon.png";
import Apply from "../../assets/apply-icon.png";
import Easy from "../../assets/easy-to-use-icon.png";
import Hidden from "../../assets/hidden-fees-icon.png";
import Insurance from "../../assets/insurance-icon.png";
import Banking from "../../assets/online-banking-icon.png";

const Features = () => {
	return (
		<section className="features section" id="features">
			<div className="features__container container">
				<span className="features__subtitle">what you get</span>
				<h2 className="section__title">
					Free business checking account in the palm of your hand
				</h2>
				<div className="features__data">
					<div className="features__cards grid">
						<article className="features__card">
							<img src={Transfer} alt="Gravity Icon" />
							<h3 className="features__card-title">Easy Transfers</h3>
							<p className="features__card-description">
								The standard chunk of Lorem Ipsum used since the 1500s is
								reproduced below for
							</p>
						</article>
						<article className="features__card">
							<img src={Apply} alt="Gravity Icon" />
							<h3 className="features__card-title">Apply In Minutes</h3>
							<p className="features__card-description">
								The standard chunk of Lorem Ipsum used since the 1500s is
								reproduced below for
							</p>
						</article>
						<article className="features__card">
							<img src={Insurance} alt="Gravity Icon" />
							<h3 className="features__card-title">FDIC Insurance</h3>
							<p className="features__card-description">
								The standard chunk of Lorem Ipsum used since the 1500s is
								reproduced below for
							</p>
						</article>
						<article className="features__card">
							<img src={Hidden} alt="Gravity Icon" />
							<h3 className="features__card-title">No Hidden Fees</h3>
							<p className="features__card-description">
								The standard chunk of Lorem Ipsum used since the 1500s is
								reproduced below for
							</p>
						</article>
						<article className="features__card">
							<img src={Banking} alt="Gravity Icon" />
							<h3 className="features__card-title">Online Banking</h3>
							<p className="features__card-description">
								The standard chunk of Lorem Ipsum used since the 1500s is
								reproduced below for
							</p>
						</article>
						<article className="features__card">
							<img src={Easy} alt="Gravity Icon" />
							<h3 className="features__card-title">Easy To Use App</h3>
							<p className="features__card-description">
								The standard chunk of Lorem Ipsum used since the 1500s is
								reproduced below for
							</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
