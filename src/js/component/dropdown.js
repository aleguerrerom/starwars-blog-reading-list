import React from "react";
import { Link } from "react-router-dom";

export const DropDown = () => {
	const x = 1;
	return (
		<div>
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
						<i className="fas fa-trash-alt" />
					</a>
				</div>
			</div>
		</div>
	);
};
