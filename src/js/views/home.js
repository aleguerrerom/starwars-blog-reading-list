import React, { useState, useEffect } from "react";
import { Cards } from "../component/card";
import { CardPlanet } from "../component/cardplanet";
import "../../styles/home.scss";

///ARRAY DE PRUEBA
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
	},
	{
		cardTitle: "R2-D2",
		buttonLabel: "Learn More",
		description: "A legendary Sith Master, Darth Maul ",
		gender: "N/A",
		eye: "N/A",
		hair: "N/A",
		img: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_86916bb6.jpeg?region=304%2C0%2C1778%2C1000&width=768"
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
	},
	{
		cardTitle: "Death Star",
		buttonLabel: "Learn More",
		description: "A legendary Sith Master, Darth Maul ",
		population: "Population: 900000",
		terrain: "Terrain: Sand",
		img:
			"https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900&width=768"
	}
];

////////EXPORT HOME
export function Home() {
	const [List, setList] = useState([]);
	const [ListPlanet, setListPlanet] = useState([]);
	useEffect(() => {
		Buscarplaneta();
		BuscarCharacter();
	}, []);

	async function BuscarCharacter() {
		const response = await fetch("https://www.swapi.tech/api/people/")
			.then(res => {
				return res.json();
			})
			.then(rpt => {
				setList(rpt.results);
			})
			.catch(error => console.log("error", error));
	}

	async function Buscarplaneta() {
		const response = await fetch("https://www.swapi.tech/api/planets/")
			.then(res => {
				return res.json();
			})
			.then(rpt => {
				setListPlanet(rpt.results);
			})
			.catch(error => console.log("error", error));
	}

	return (
		<div className="container">
			<div>
				<h1>Characters</h1>
				<div className="container testimonial-group">
					<div className="row text-center">
						{List.map((people, i) => (
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
						{ListPlanet.map((planet, j) => (
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
