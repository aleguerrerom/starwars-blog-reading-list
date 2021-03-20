import React from "react";
import { Link } from "react-router-dom";
import SWIcon from "../../img/starwars.png";
export const Navbar = () => {
	const x = 1;
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<a className="navbar-brand">
				<img src={SWIcon} />
			</a>
			<div className="dropdown">
				<button
					className="btn btn-dark dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favoritos {x}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action <i className="fas fa-trash-alt" />
					</a>
				</div>
			</div>
		</nav>
	);
};
