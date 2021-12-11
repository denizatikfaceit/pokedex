import { Dispatch } from "redux";
import { PokemonDispatchTypes, IPokemon, FETCH_POKEMON_SUCCESS} from "./types";

export const fetchPokemon = () => {
	return async (dispatch: Dispatch<PokemonDispatchTypes>) => {
		var allPokemons: IPokemon = [];
		for (var i = 1; i <= 151; i++) {
			const respose = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${i}`
			).then((res) => res.json());
			allPokemons.push(respose);
		}

		dispatch({ type: FETCH_POKEMON_SUCCESS, payload: allPokemons });
	};
};
