import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	const { width = 150, link = true, isHomepage = false } = props;
	const [logoSize, setLogoSize] = useState(width);
	const [imageError, setImageError] = useState(false);

	useEffect(() => {
		if (!isHomepage) return;

		const handleScroll = () => {
			const scroll = Math.round(window.pageYOffset, 2);
			const newSize = Math.max(120, 150 - (scroll * 4) / 10);
			setLogoSize(newSize);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isHomepage]);

	const handleImageError = () => {
		setImageError(true);
		console.error("Failed to load logo image");
	};

	const imageElement = (
		<div className={`logo-container ${isHomepage ? 'homepage-logo' : ''}`}>
			<img src={process.env.PUBLIC_URL + INFO.main.logo} alt="logo" className="logo" width={logoSize} height={logoSize} onError={handleImageError} />
		</div>
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
