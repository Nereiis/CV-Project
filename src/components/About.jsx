import React from "react";
import './Styles/About.css';

const About = ({ hero }) => {
	const about = hero.aboutMe;
	return(
		<div className = 'about-container'>
			<div className = 'about-card'>
				{about.map((item, i) => {
					return(
						<div key = {JSON.stringify(item)}>
							<p> {item.info} </p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default About;