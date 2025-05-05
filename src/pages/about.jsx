import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import '../styles/homepage.css';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<Logo width={46} />
					</div>
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle about-centered-bio">
									{INFO.about.description}
								</div>

								<div className="about-hobbies-images-row">
									<img src="/hiking.jpg" alt="Hiking" className="about-hobby-image" />
									<img src="/cricket.jpg" alt="Cricket" className="about-hobby-image" />
									<img src="/lifting.jpg" alt="Lifting" className="about-hobby-image" />
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
