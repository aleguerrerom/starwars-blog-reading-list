import React from "react";
import { Link } from "react-router-dom";
import SWIcon from "../../img/starwars.png";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<a className="navbar-brand">
				<img src={SWIcon} />
			</a>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a className="dropdown-item" href="#">
					Action
				</a>
				<a className="dropdown-item" href="#">
					Another Action
				</a>
				<a className="dropdown-item" href="#">
					Someting Else
				</a>
			</div>
		</nav>
	);
};
