import {
	POKEMON_FETCH_FAIL,
	POKEMON_FETCH_LOADING,
	FETCH_POKEMON_SUCCESS,
	PokemonDispatchTypes,
	IPokemon,
} from "./types";

interface IDefaultState {
	loading: boolean;
	pokemon?: IPokemon;
}

const defaultState: IDefaultState = {
	loading: false,
};

export const pokemonReducer = (
	state: IDefaultState = defaultState,
	action: PokemonDispatchTypes
): IDefaultState => {
	switch (action.type) {
		case POKEMON_FETCH_FAIL:
			return {
				loading: false,
			};
		case POKEMON_FETCH_LOADING:
			return {
				loading: true,
			};
		case FETCH_POKEMON_SUCCESS:
			return {
				loading: false,
				pokemon: action.payload,
			};
		default:
			return state;
	}
};
