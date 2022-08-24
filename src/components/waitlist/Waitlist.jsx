import "./waitlist.css";

import { useForm } from "react-hook-form";

import Axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Waitlist = () => {
	// Handle Form Event
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm();

	// Handle Submti
	const onSubmit = (data) => {
		// console.log(data);
		// alert(JSON.stringify(data));

		const url = "https://api.gravity.africa/api/v1/wait-list/store";
		Axios.post(url, data)
			.then((response) => {
				// console.log(response.data);
				toast.success(response.data.message, { theme: "colored" });
			})
			.catch((err) => {
				// console.log(err);
				toast.error(err.response.data.message, { theme: "colored" });
			});
	};

	return (
		<section className="section waitlist" id="waitlist">
			<div className="container waitlist__container">
				<h2 className="section__title">
					Get 2,000 in your business account and 30mins free business advisory
					services when we launch.
				</h2>
				<p className="waitlist__description">
					Join Gabriel, Blake, and 1172 others on the waitlist
				</p>

				<form onSubmit={handleSubmit(onSubmit)} className="waitlist__form">
					<div className="form__flex">
						<div>
							{/* Name Field  */}
							<input
								type="text"
								placeholder="Your Name"
								{...register("name", { required: "Please put in your name" })}
							/>
							{errors.name && (
								<span className="input-error">{errors.name.message}</span>
							)}
						</div>
						<div>
							{/* Phone Number Field  */}
							<input
								type="tel"
								placeholder="Phone Number"
								{...register("phone", {
									required: "Phone number is required",
									pattern: /^[0-9\b]+$/,
								})}
							/>
							{errors.phone && (
								<span className="input-error">{errors.phone.message}</span>
							)}

							{errors.phone?.type === "pattern" && (
								<span className="input-error no-mt">
									The field should contain only numbers
								</span>
							)}
						</div>
					</div>
					<div>
						{/* Email Field  */}
						<input
							type="email"
							placeholder="Your Email Address"
							{...register("email", {
								required: "Email address is required",
								pattern:
									/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g,
							})}
						/>
						{errors.email && (
							<span className="input-error">{errors.email.message}</span>
						)}

						{errors.email?.type === "pattern" && (
							<span className="input-error no-mt">
								Only valid email is allowed
							</span>
						)}
					</div>
					<button type="submit" className="btn">
						Join Waitlist
					</button>
				</form>
			</div>
		</section>
	);
};

export default Waitlist;
