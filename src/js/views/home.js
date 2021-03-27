import React, { useState, useEffect, useContext } from "react";
import { Cards } from "../component/card";
import { CardPlanet } from "../component/cardplanet";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

////////EXPORT HOME
export function Home() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div>
				<Link to="/demo">
					<h1>Characters</h1>
				</Link>
				<div className="container testimonial-group">
					<div className="row text-center">
						{store.peopleList.map((people, i) => (
							<div className="col-4" key={i}>
								<Cards PeopleID={people.uid} />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="container">
				<h1>Planets</h1>
				<div className="container testimonial-group">
					<div className="row text-center">
						{store.planetList.map((planet, j) => (
							<div className="col-4" key={j}>
								<CardPlanet PlanetID={planet.uid} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
