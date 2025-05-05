import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import '../styles/homepage.css';

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";


import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<Logo width={80} link={false} isHomepage={true} />
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="homepage-name">
									{INFO.main.name}
								</div>
								<div className="subtitle homepage-subtitle">
									Aspiring software engineer and B.S. Computer Science student at Georgia Tech, specializing in Intelligence & Modeling-Simulation. Experienced in real-time speech-to-text systems, web development, and AI-powered solutions. Graduating December 2026.
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={process.env.PUBLIC_URL + "/homepage.jpg"}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-works-section">
								<h2 className="homepage-section-title">Experience</h2>
								<div className="homepage-works">
									<Works />
								</div>
							</div>
							<div className="homepage-coursework-section">
								<h2 className="homepage-section-title">My Coursework</h2>
								<ul className="homepage-coursework-list">
									<li><a href="https://math.gatech.edu/courses/math/1554" target="_blank" rel="noopener noreferrer">MATH 1554 – Linear Algebra</a></li>
									<li><a href="https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=201202&subj_code_in=CS&crse_numb_in=1332" target="_blank" rel="noopener noreferrer">CS 1332 – Data Structures and Algorithms for Applications</a></li>
									<li><a href="https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202402&subj_code_in=CS&crse_numb_in=2050" target="_blank" rel="noopener noreferrer">CS 2050 – Introduction to Discrete Mathematics for Computer Science</a></li>
									<li><a href="https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202105&subj_code_in=CS&crse_numb_in=2340" target="_blank" rel="noopener noreferrer">CS 2340 – Objects and Design</a></li>
									<li><a href="https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202402&subj_code_in=CS&crse_numb_in=2110" target="_blank" rel="noopener noreferrer">CS 2110 – Computer Organization and Programming</a></li>
									<li><a href="https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202008&subj_code_in=CS&crse_numb_in=2200" target="_blank" rel="noopener noreferrer">CS 2200 – Computer Systems and Networks</a></li>
									<li><a href="https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202402&subj_code_in=CS&crse_numb_in=3600" target="_blank" rel="noopener noreferrer">CS 3600 – Introduction to Artificial Intelligence</a></li>
									<li><a href="https://math.gatech.edu/courses/math/2552" target="_blank" rel="noopener noreferrer">MATH 2552 – Differential Equations</a></li>
									<li><a href="https://oscar.gatech.edu/pls/bprod/bwckctlg.p_disp_course_detail?cat_term_in=201902&subj_code_in=ISYE&crse_numb_in=3770" target="_blank" rel="noopener noreferrer">ISYE 3770 – Statistics and Applications</a></li>
								</ul>
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
