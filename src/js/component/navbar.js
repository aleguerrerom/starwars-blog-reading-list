import React from "react";
import { Link } from "react-router-dom";
import SWIcon from "../../img/starwars.png";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<a className="navbar-brand">
				<img src={SWIcon} />
			</a>
			<form className="form-inline">
				<li className="nav-item bg-secondary mb-3">
					<select className="custom-select badge-dark">
						<option selected>Favorites</option>
						<option value="1">
							One <i id="right" className="fas fa-trash-alt" onClick="" />
						</option>

						<option value="2">
							Two <i id="right" className="fas fa-trash-alt" onClick="" />
						</option>

						<option value="3">
							Three
							<i id="right" className="fas fa-trash-alt" onClick="" />
						</option>
					</select>
				</li>
			</form>
		</nav>
	);
};
