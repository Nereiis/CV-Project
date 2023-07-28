import React from "react";
import './Styles/More.css';

const More = ({ languages, habilities }) => {
  return (
    <div className = 'more-container'>
			<div className = 'languages-card'>
				<h2>Languages</h2>
					<ul>
						<li>
							<p className = 'language'>
								{languages.language}
							</p>
							<li>
								<p className = "language-intro">
									Writing 
								</p>
								<p>
								{languages.wrlevel}
								</p>
							</li>
							<li>
								<p className = "language-intro">
									Speaking 
								</p>
								<p>
								{languages.splevel}
								</p>
							</li>
						</li>
					</ul>
			</div>
			<div className = 'habilities-card'>
				<h2>Habilites</h2>
				{habilities.map ((item, i) => {
					return(
						<div key={JSON.stringify(item)}>
							<p>{item}</p>
						</div>
					)
				})}
			</div>
    </div>
  )
}

export default More;