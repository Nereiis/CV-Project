import React from "react";
import './Styles/Experience.css'

//Se crea la función para acceder a la parte de Educación del CV
//Se pasan las PROPS con el mismo nombre para aclarar lo que devuelven
const Experience = ({ experience }) => {
	return(
		<div className = 'experience-container'>
			<div className = 'experience-card'>
			{/* En esta función education.map se crea un nuevo RETURN que nos devolverá cada item que encuentre en el esquema que le marcamos */}
				{experience.map((item) => {
					return(
						// Con JSON.stringify lo que hacemos es generar un elemento JSON de nuestro archivo CV que nos permita rellenar el esquema. Al convertirlo en JSON el método .stringify lo convierte en cadena de caracteres o string
						<div key={JSON.stringify(item)}>
							<p className = 'name'>
							📕 {item.name}
							</p>
							<p> {item.where} </p>
							<p> {item.date} </p>
                            <p className = 'description'> Description </p>
                            <p> {item.description} </p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Experience;