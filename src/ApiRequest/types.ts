export const POKEMON_FETCH_LOADING = "POKEMON_FETCH_LOADING";
export const POKEMON_FETCH_FAIL = "POKEMON_FETCH_FAIL";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON";

export interface PokemonFetchLoading {
	type: typeof POKEMON_FETCH_LOADING;
}

export interface PokemonFetchSuccess {
	type: typeof FETCH_POKEMON_SUCCESS;
	payload: IPokemon;
}

export interface PokemonFetchFail {
	type: typeof POKEMON_FETCH_FAIL;
}

export type PokemonDispatchTypes =
	| PokemonFetchLoading
	| PokemonFetchFail
	| PokemonFetchSuccess;

interface IPokemonType {
	type: {
		name: string;
	};
}

interface IPokemonStat {
	base_stat: number;
	stat: {
		name: string;
	};
}

export type IPokemon = {
	id: number;
	name: string;
	sprites: { front_default: string };
	types: IPokemonType[];
	height: string;
	weight: string;
	stats: IPokemonStat[];
}[];
