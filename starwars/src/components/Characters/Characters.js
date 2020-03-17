import React from 'react';
import Character from '../Character/Character';
import { Container, Row, Col, Button } from 'reactstrap';
import './Characters.css'

const Characters = (props) => {
    // STRETCH: search with regular expression === Kim Buck March 8, 2020
	const queryRX = new RegExp(props.query, 'i');

	return (
		<Container className="characters">
			<Row>
				{/* STRETCH: search using filter, going throw characters and queryRX out === Kim Buck March 8, 2020 */}
				{props.characters
					.filter((character) => {
						if (props.query == '') return true;
						return queryRX.test(character.name) || queryRX.test(character.gender);
					})
					.map((character) => <Character characterData={character}/>)}
			</Row>
            <Row>
                <Col>
                    <Button onClick={props.onLoadMore}>Load more...</Button>
                </Col>
            </Row>
		</Container>
	);
};

export default Characters;
