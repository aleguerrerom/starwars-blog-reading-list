import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SWIcon from "../../img/starwars.png";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const Counter = () => {
		let x = 0;
		store.peopleList.forEach(element => {
			if (element.favorite) {
				x++;
			}
		});
		store.planetList.forEach(element => {
			if (element.favorite) {
				x++;
			}
		});
		return <span className="mr-1 p-1 bg-light text-body rounded">{x}</span>;
	};

	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<a className="navbar-brand">
				<Link to="/">
					<img src={SWIcon} />
				</Link>
			</a>
			<a className="navbar-brand">
				<Link to="/demo">
					<h4 id="dark">Characters</h4>
				</Link>
			</a>
			<a className="navbar-brand">
				<Link to="/demo">
					<h4 id="dark">Planets</h4>
				</Link>
			</a>
			<div className="dropdown">
				<button
					className="btn btn-dark dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favoritos <Counter />
				</button>
				<div className="dropdown-menu dropdown-menu-right" style={{ width: "max-content" }}>
					{store.peopleList.map((item, i) => {
						if (item.favorite) {
							return (
								<div className="row my-0 ml-0 mr-2">
									<Link to={"/people/details/" + item.uid} replace>
										<a className="dropdown-item">{item.name}</a>
									</Link>
									<i
										className="far fa-trash-alt mt-2 ml-auto mr-0"
										onClick={() => actions.addFavorite(item.uid)}
									/>
								</div>
							);
						}
					})}

					{store.planetList.map((item, i) => {
						if (item.favorite) {
							return (
								<div className="row my-0 ml-0 mr-2">
									<Link to={"/planets/details/" + item.uid} replace>
										<a className="dropdown-item">{item.name}</a>
									</Link>
									<i
										className="far fa-trash-alt mt-2 ml-auto mr-0"
										onClick={() => actions.addFavoritePlanet(item.uid)}
									/>
								</div>
							);
						}
					})}
				</div>
			</div>
		</nav>
	);
};
