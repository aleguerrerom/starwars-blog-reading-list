import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import "../../styles/home.scss";

let objCharacter = {
	properties: {
		height: "172",
		mass: "77",
		hair_color: "blond",
		skin_color: "fair",
		eye_color: "blue",
		birth_year: "19BBY",
		gender: "male",
		created: "2021 - 03 - 12T19: 25: 06.429Z",
		edited: "2021 - 03 - 12T19: 25: 06.429Z",
		name: "Luke Skywalker",
		homeworld: "https://www.swapi.tech/api/planets/1",
		url: "https://www.swapi.tech/api/people/1"
	},
	description: "A person within the Star Wars universe",
	_id: "5f63a36eee9fd7000499be42",
	uid: "1",
	__v: 0
};

let image = [
	"https://lumiere-a.akamaihd.net/v1/images/aksoka-tano-the-mandalorian_2c65f9f0.jpeg?region=0%2C0%2C1280%2C720&width=768"
];

export const Cards = props => {
	const [character, fnCharacter] = useState(objCharacter);
	useEffect(() => {
		BuscarCharacter();
	}, []);

	async function BuscarCharacter() {
		const response = await fetch("https://www.swapi.tech/api/people/" + props.PeopleID)
			.then(res => {
				return res.json();
			})
			.then(rpt => {
				fnCharacter(rpt.result);
			})
			.catch(error => console.log("error", error));
	}
	return (
		<div id="Card">
			<div className="card my-2">
				<img className="card-img-top w-100" src={image[0]} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Name: {character.properties.name}</h5>
					<p className="card-text">Gender: {character.properties.gender} </p>
					<p className="card-text">
						Hair Color:
						{character.properties.hair_color}{" "}
					</p>
					<p className="card-text">
						Eye Color:
						{character.properties.eye_color}{" "}
					</p>
					<p className="card-text">
						Height:
						{character.properties.height}{" "}
					</p>
					<p className="card-text">
						Mass
						{character.properties.mass}{" "}
					</p>
					<a href="#" className="btn btn-primary">
						Learn More
					</a>
					<button type="button" className="btn btn-outline-primary">
						♡
					</button>
				</div>
			</div>
		</div>
	);
};
Cards.propTypes = {
	PeopleID: PropType.string
};
