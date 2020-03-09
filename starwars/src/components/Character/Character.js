import React, { useState, useEffect } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import Axios from 'axios';

const Character = (props) => {
	const [ homeworld, setHomeworld ] = useState('Loading');
	useEffect(() => {
		Axios.get(props.characterData.homeworld).then(
            response => {
                //console.log(response.data);
                setHomeworld(response.data.name)
            }
        );
    },[props.characterData.homeworld]
    );
	return (
		<Row>
			<Col className='characters' md={{ size: 4, offset: 4 }}  >
				<Card className='character'>
					<CardBody>
						<CardTitle>
							<h3> {props.characterData.name}</h3>
						</CardTitle>
						<CardSubtitle>Home World: {homeworld}</CardSubtitle>
						<CardText>
							<span className='height'> Heigh {props.characterData.height} </span><br/>
							<span className='mass'>Mass :{props.characterData.mass}</span><br/>
							<span className='hair_color'>Hair color: {props.characterData.hair_color}</span><br/>
							<span className='skin_color'>Skin color: {props.characterData.skin_color}</span><br/>
							<span className='eye_color'>Eye color: {props.characterData.eye_color}</span><br/>
							<span className='birth_year'>Birth year: {props.characterData.birth_year}</span><br/>
							<span className='gender'>Gender: {props.characterData.gender}</span><br/>
						</CardText>
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};
export default Character;
