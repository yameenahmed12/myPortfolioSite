import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import "../styles/homepage.css";

const Coursework = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="coursework" />
				<div className="content-wrapper">
					<div className="coursework-logo-container">
						<Logo width={46} />
					</div>
					<div className="homepage-coursework-section">
						<h2 className="homepage-section-title">My Coursework</h2>
						<div className="subtitle homepage-subtitle" style={{maxWidth: '700px', marginBottom: '2rem'}}>
							Here are some of the core courses I have completed as part of my B.S. in Computer Science at Georgia Tech. These courses have provided a strong foundation in algorithms, systems, artificial intelligence, mathematics, and statistics.
						</div>
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
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Coursework; 