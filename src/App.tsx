import React from "react";
import { Provider } from "react-redux";
import Pokemons from "./Components/Pokemons";
import Pokemon from "./Components/Pokemon";
import { createStore, applyMiddleware } from "redux";
import { pokemonReducer } from "./ApiRequest/reducer";
import thunk from "redux-thunk";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const store = createStore(pokemonReducer, applyMiddleware(thunk));
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/' element={<Pokemons />}></Route>
					<Route path='/pokemon/:id' element={<Pokemon />}></Route>
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
