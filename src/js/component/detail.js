import React, { Component, useEffect, useState } from "react";
import PropType from "prop-types";

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
	"",
	"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=768",
	"https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536&width=768",
	"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_86916bb6.jpeg?region=304%2C0%2C1778%2C1000&width=768",
	"https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
	"https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
	"https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=768"
];

export const DetailCharacter = props => {
	const [Character, fnCharacter] = useState(objCharacter);
	async function fnPeople() {
		const response = await fetch("https://www.swapi.tech/api/people/" + props.PeopleID)
			.then(res => {
				if (res.status == 200) {
					return res.json();
					console.log(res.json());
				}
			})
			.then(response => {
				fnCharacter(response.result);
			})
			.catch(err => console.error(err));
	}

	useEffect(() => {
		fnPeople();
	}, []);

	return (
		<div className="container text-font-base">
			<div className="jumbotron">
				<h1 className="display-4">{Character.properties.name}</h1>
				<p className="lead">
					<img className="card-img-top w-100" src={image[props.PeopleID]} alt="Card image cap" />
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to space content out within the larger
					container.
				</p>
				<p className="lead">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">BirthYear</th>
								<th scope="col">Gender</th>
								<th scope="col">Height</th>
								<th scope="col">Skin Color</th>
								<th scope="col">Eye Blue</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>{Character.properties.name}</th>
								<td>{Character.properties.birth_year}</td>
								<td>{Character.properties.gender}</td>
								<td>{Character.properties.height}</td>
								<td>{Character.properties.skin_color}</td>
								<td>{Character.properties.eye_color}</td>
							</tr>
						</tbody>
					</table>
				</p>
			</div>
		</div>
	);
};

DetailCharacter.propTypes = {
	PeopleID: PropType.string
	// 2) add here the new properties into the proptypes object
};
