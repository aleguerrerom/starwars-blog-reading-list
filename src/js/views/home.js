import React, { useState, useEffect } from "react";
import { Cards } from "../component/card";
import "../../styles/home.scss";

const CharacterArray = [
	{
		cardTitle: "Azoka",
		buttonLabel: "Learn More",
		description: "Ahsoka Tano, a Togruta female,",
		gender: "Gender: Female",
		eye: "Eye-Color: Green",
		hair: "Hair-Color: None",
		img:
			"https://lumiere-a.akamaihd.net/v1/images/aksoka-tano-the-mandalorian_2c65f9f0.jpeg?region=0%2C0%2C1280%2C720&width=768"
	},
	{
		cardTitle: "Obi Wan Kenobi",
		buttonLabel: "Learn More",
		description: "A legendary Jedi Master, Obi-Wan Kenobi ",
		gender: "Gender: Male",
		eye: "Eye-Color: Brown",
		hair: "Hair-Color: Brown",
		img: "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768"
	},
	{
		cardTitle: "Darth Maul",
		buttonLabel: "Learn More",
		description: "A legendary Sith Master, Darth Maul ",
		gender: "Gender: Male",
		eye: "Eye-Color: Black",
		hair: "Hair-Color: N/A",
		img: "https://starwarsblog.starwars.com/wp-content/uploads/2015/07/EP1_IA_72118-copy-1536x864-433723767381.jpg"
	}
];

const PlanetsArray = [
	{
		cardTitle: "Tatooine",
		buttonLabel: "Learn More",
		description: "Ahsoka Tano, a Togruta female,",
		population: "Population: 900000",
		terrain: "Terrain: Sand",
		img: "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=164%2C0%2C953%2C536&width=768"
	},
	{
		cardTitle: "Naboo",
		buttonLabel: "Learn More",
		description: "A legendary Jedi Master, Obi-Wan Kenobi ",
		population: "Population: 900000",
		terrain: "Terrain: Sand",
		img:
			"https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=768"
	},
	{
		cardTitle: "Coruscant",
		buttonLabel: "Learn More",
		description: "A legendary Sith Master, Darth Maul ",
		population: "Population: 900000",
		terrain: "Terrain: Sand",
		img: "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=768"
	}
];
const CardCharactersMap = CharacterArray.map((singleCard, i) => {
	return (
		<Cards
			key={i}
			title={singleCard.cardTitle}
			description={singleCard.description}
			image={singleCard.img}
			buttonLabel={singleCard.buttonLabel}
			gender={singleCard.gender}
			eye={singleCard.eye}
			hair={singleCard.hair}
		/>
	);
});

const CardCharacterList = () => {
	return <div className="col-4">{CardCharactersMap}</div>;
};

const CardPlanetsMap = PlanetsArray.map((singleCard, j) => {
	return (
		<Cards
			key={j}
			title={singleCard.cardTitle}
			description={singleCard.description}
			image={singleCard.img}
			buttonLabel={singleCard.buttonLabel}
			population={singleCard.population}
			terrain={singleCard.terrain}
		/>
	);
});

const CardPlanetsList = () => {
	return <div className="col-4">{CardPlanetsMap}</div>;
};

export const Home = () => (
	<div className="container">
		<div className="container">
			<div>
				<h1>Characters</h1>
				<div className="container testimonial-group">
					<div className="row text-center">
						<CardCharacterList />
					</div>
				</div>
			</div>
			<div className="container">
				<h1>Planets</h1>
				<div className="container testimonial-group">
					<div className="row text-center">
						<CardPlanetsList />
					</div>
				</div>
			</div>
		</div>
	</div>
);
