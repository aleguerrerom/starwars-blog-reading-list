import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../component/card";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row text-center">
				{store.peopleList.map((people, i) => (
					<div className="col-4" key={i}>
						<Cards PeopleID={people.uid} />
					</div>
				))}
			</div>
		</div>
	);
};
