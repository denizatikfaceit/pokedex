import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../ApiRequest/actions";
import {
	PokemonContainer,
	PokemonLinkWrapper,
	Tittle,
	TittleWrapper,
	PokemonLink,
} from "./styles";
import { IState } from "../../ApiRequest/selectors";
import { selectColour } from "../../ulity/selectPokemonColor";

const Pokemons = () => {
	const dispatch = useDispatch();
	const pokemons = useSelector((state: IState) => state.pokemon);

	useEffect(() => {
		dispatch(fetchPokemon());
	}, []);

	return (
		<div>
			<TittleWrapper>
				<Tittle> Pokedex</Tittle>
			</TittleWrapper>

			<PokemonContainer>
				{pokemons &&
					pokemons.map((it) => (
						<PokemonLinkWrapper
							bg={selectColour([it.types[0].type.name])}
							to={`pokemon/${it.name}`}
						>
							<img src={it.sprites.front_default} alt={it.name}></img>
							<PokemonLink key={it.name}> {it.name}</PokemonLink>
						</PokemonLinkWrapper>
					))}
			</PokemonContainer>
		</div>
	);
};

export default Pokemons;
