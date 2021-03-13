import React from "react";
import PropType from "prop-types";
import "../../styles/home.scss";
export const Cards = props => (
	<div>
		<div className="card my-2">
			<img className="card-img-top w-100" src={props.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.gender} </p>
				<p className="card-text">{props.hair} </p>
				<p className="card-text">{props.eye} </p>
				<p className="card-text">{props.population} </p>
				<p className="card-text">{props.terrain} </p>
				<a href="#" className="btn btn-primary">
					{props.buttonLabel}
				</a>
				<button type="button" className="btn btn-outline-primary">
					♡
				</button>
			</div>
		</div>
	</div>
);

Cards.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string,
	image: PropType.string,
	gender: PropType.string,
	hair: PropType.string,
	eye: PropType.string,
	population: PropType.string,
	terrain: PropType.string
};
