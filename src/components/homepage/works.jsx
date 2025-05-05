import React from "react";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<div className="works-border-wrapper">
				<div className="works-body">
					<div className="work">
						<img
							src={process.env.PUBLIC_URL + "/gt.png"}
							alt="Georgia Tech"
							className="work-image"
						/>
						<div className="work-info">
							<div className="work-title">Speech Detection and Audio Processing Researcher</div>
							<div className="work-subtitle">Georgia Tech VIP Program, Atlanta, GA</div>
							<div className="work-duration">Jan 2025 – Present</div>
							<ul className="work-details">
								<li>Engineering real-time speech-to-text systems for BrainBridge, a platform designed to address student mental health and multidisciplinary research.</li>
								<li>Optimizing audio processing algorithms with Python and OpenAI's Whisper X model to handle noisy environments, diverse accents, and speaker diarisation.</li>
								<li>Ensuring accurate, context-aware transcriptions to support NLP-driven jargon detection and classification.</li>
							</ul>
						</div>
					</div>

					<div className="work">
						<img
							src={process.env.PUBLIC_URL + "/mtc.png"}
							alt="Muslim Tech Collaborative"
							className="work-image"
						/>
						<div className="work-info">
							<div className="work-title">Web Development Intern</div>
							<div className="work-subtitle">Muslim Tech Collaborative, Atlanta, GA</div>
							<div className="work-duration">Oct 2024 – Dec 2024</div>
							<ul className="work-details">
								<li>Managed version control on GitHub, ensuring 100% documentation of code changes and leading branching strategies to improve collaboration, reduce conflicts, and boost sprint efficiency by 20%.</li>
								<li>Designed a modern website using responsive design practices with Tailwind CSS and React, increasing club sign-ups by 30%.</li>
								<li>Developed backend using Node.js and MongoDB, enabling real-time data flow for a donation platform that processes over $500 in donations.</li>
							</ul>
						</div>
					</div>

					<div className="work">
						<img
							src={process.env.PUBLIC_URL + "/target.png"}
							alt="Target"
							className="work-image"
						/>
						<div className="work-info">
							<div className="work-title">Electronic Sales Associate</div>
							<div className="work-subtitle">Target, Levittown, NY</div>
							<div className="work-duration">Nov 2021 – Feb 2022</div>
							<ul className="work-details">
								<li>Achieved a 5% increase in technology department sales as measured by weekly sales growth by utilizing Zebra sales devices to track device shortages during Black Friday.</li>
								<li>Provided personalized customer service through 1-on-1 debugging sessions with iOS and Android customers.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
