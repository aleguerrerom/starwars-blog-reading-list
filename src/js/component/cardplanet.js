import React, { useEffect, useState, useContext } from "react";
import PropType from "prop-types";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

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
	"https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=164%2C0%2C953%2C536&width=768",
	"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=768",
	"https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=768"
];

export const CardPlanet = props => {
	const [planeta, fnPlaneta] = useState(objPlanet);
	const { store, actions } = useContext(Context);

	let detailURL = "planets/details/" + props.PlanetID;
	useEffect(() => {
		BuscarPlaneta();
	}, []);

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

	return (
		<div id="Card">
			<div className="card my-2">
				<img className="card-img-top w-100" src={image[props.PlanetID]} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Name: {planeta.properties.name}</h5>
					<p className="card-text">Gravity: {planeta.properties.gravity}</p>
					<p className="card-text">Population: {planeta.properties.population}</p>
					<p className="card-text">Climate: {planeta.properties.climate}</p>
					<p className="card-text">Diameter: {planeta.properties.diameter}</p>
					<Link to={detailURL} href="#" className="btn btn-primary">
						Learn More
					</Link>
					<button
						type="button"
						className="btn btn-outline-primary"
						onClick={() => actions.addFavoritePlanet(props.PlanetID)}>
						{store.planetList.map(item => {
							if (props.PlanetID === item.uid) {
								if (item.favorite) {
									return <i className="fas fa-heart" />;
								} else {
									return <i className="far fa-heart" />;
								}
							}
						})}
					</button>
				</div>
			</div>
		</div>
	);
};

CardPlanet.propTypes = {
	PlanetID: PropType.string
};
