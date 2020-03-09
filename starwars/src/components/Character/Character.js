import React, { useState, useEffect } from 'react';

const Character = (props) => {
	return (
		<div className="character">
			<h3> {props.characterData.name}</h3>
			<p className="height"> Heigh {props.characterData.height} </p>
			<p className="mass">Mass :{props.characterData.mass}</p>
			<p className="hair_color">Hair color: {props.characterData.hair_color}</p>
			<p className="skin_color">Skin color: {props.characterData.skin_color}</p>
			<p className="eye_color">Eye color: {props.characterData.eye_color}</p>
			<p className="birth_year">Birth year {props.characterData.birth_year}</p>
			<p className="gender">Gender: {props.characterData.gender}</p>
			<p className="homeworld">Home World: {props.characterData.homeworld}</p>
		</div>
	);
};
export default Character;