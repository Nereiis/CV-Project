import React from "react";
import './Styles/Hero.css'

//Creamos la función Hero con PROPS 'hero' para poder acceder a los valores que deseamos
const Hero = ({ hero }) => {
  return (
    <div className = 'hero'>
			<div className = 'card-container'>
				<img src = {hero.image} alt = '' />
					<div className = 'card'>
						<h2>
							{hero.name}
						</h2>
						{/* Iconos copiados directamente de Notion */}
						<p>🗺️ {hero.address} / {hero.city}</p>
						<p>🗓️ {hero.birthDate}</p>
						<p>
							📧 <a href = {`Email: ${hero.email}`}> natasha@shield.gov </a>
						</p>
						<p>📱 {hero.phone}</p>
						<p>
							💾
							 <a href = {hero.gitHub}>
								GitHub
							</a>
						</p>
					</div>
				</div>
    </div>
    )
}

export default Hero;