import { IPokemon } from "./types";

export interface IState {
	pokemon: IPokemon;
}

export function selectAllBeers(state: IState) {
	return state;
}

export function selectPokemon(state: IState, entityId: string | undefined) {
	if (state) return state.pokemon?.find((pokemon) => pokemon.name === entityId);
}
