import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailCharacter } from "../component/detail";
import { DetailPlanet } from "../component/planetdetail";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	if (params.type === "people") return <DetailCharacter PeopleID={params.theid} />;
	else return <DetailPlanet PlanetID={params.theid} />;
};

Single.propTypes = {
	match: PropTypes.object
};
