import React, { Component, useEffect, useState } from "react";
import PropType from "prop-types";

let objPlanet = {
	properties: {
		diameter: "10465",
		rotation_period: "23",
		orbital_period: "304",
		gravity: "1 standard",
		population: "200000",
		climate: "arid",
		terrain: "desert",
		surface_water: "1",
		created: "2021-03-17T09:16:12.257Z",
		edited: "2021-03-17T09:16:12.257Z",
		name: "Tatooine",
		url: "https://www.swapi.tech/api/planets/1"
	},
	description: "A planet.",
	_id: "5f7254c11b7dfa00041c6fae",
	uid: "1",
	__v: 0
};
let image = [
	"",
	"https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=164%2C0%2C953%2C536&width=768"
];

export const DetailPlanet = props => {
	const [planeta, fnPlaneta] = useState(objPlanet);
	async function BuscarPlaneta() {
		const response = await fetch("https://www.swapi.tech/api/planets/" + props.PlanetID)
			.then(res => {
				return res.json();
			})
			.then(rpt => {
				fnPlaneta(rpt.result);
			})
			.catch(error => console.log("error", error));
	}

	useEffect(() => {
		BuscarPlaneta();
	}, []);

	return (
		<div className="container text-font-base">
			<div className="jumbotron">
				<h1 className="display-4">{planeta.properties.name}</h1>
				<p className="lead">
					<img className="card-img-top w-100" src={image[props.PlanetID]} alt="Card image cap" />
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
								<th>{planeta.properties.name}</th>
								<td />
								<td />
								<td />
								<td />
								<td />
							</tr>
						</tbody>
					</table>
				</p>
			</div>
		</div>
	);
};

DetailPlanet.propTypes = {
	PlanetID: PropType.string
	// 2) add here the new properties into the proptypes object
};
