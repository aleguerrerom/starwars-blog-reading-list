const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetList: [],
			peopleList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addFavorite: uid => {
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const newData = store.peopleList.map(item => {
					if (item.uid === uid) {
						if (item.favorite) item.favorite = false;
						else item.favorite = true;
						return item;
					} else return item;
				});

				//reset the global store
				setStore({ peopleList: newData });
			},
			addFavoritePlanet: uid => {
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const newData = store.planetList.map(item => {
					if (item.uid === uid) {
						if (item.favorite) item.favorite = false;
						else item.favorite = true;
						return item;
					} else return item;
				});

				//reset the global store
				setStore({ planetList: newData });
			},
			loadSomeData: () => {
				async function BuscarCharacter() {
					const response = await fetch("https://www.swapi.tech/api/people/")
						.then(res => {
							return res.json();
						})
						.then(rpt => {
							const newData = rpt.results.map(item => ({ ...item, favorite: false }));
							setStore({ peopleList: newData });
						})
						.catch(error => console.log("error", error));
				}

				async function BuscarPlaneta() {
					const response = await fetch("https://www.swapi.tech/api/planets/")
						.then(res => {
							return res.json();
						})
						.then(rpt => {
							const newData = rpt.results.map(item => ({ ...item, favorite: false }));
							setStore({ planetList: newData });
						})
						.catch(error => console.log("error", error));
				}
				BuscarCharacter();
				BuscarPlaneta();
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
