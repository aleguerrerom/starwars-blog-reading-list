import React from "react";
import { Cards } from "../component/card";
import "../../styles/home.scss";

const CardCharactersList = () => {
	return (
		<div className="col-4">
			<Cards />
		</div>
	);
};

const CardPlanetsList = () => {
	return (
		<div className="col-4">
			<Cards />
		</div>
	);
};

export const Home = () => (
	<div classNameName="text-center mt-5">
		<div className="container testimonial-group">
			<div className="row text-center">
				<CardCharactersList />
				<CardCharactersList />
				<CardCharactersList />
				<CardCharactersList />
			</div>
		</div>

		<div className="container testimonial-group">
			<div className="row text-center">
				<CardPlanetsList />
				<CardPlanetsList />
				<CardPlanetsList />
				<CardPlanetsList />
			</div>
		</div>
	</div>
);
