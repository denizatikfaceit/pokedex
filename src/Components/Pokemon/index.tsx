import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IState, selectPokemon } from "../../ApiRequest/selectors";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../../ApiRequest/actions";
import {
	ImageWrapper,
	PokemonTittle,
	PokemonType,
	PokemonTypeWrapper,
	PokemonContent,
	PokemonContentWrapper,
	SizeWrapper,
	SizeContanier,
	Size,
	PokemonStatName,
	BaseStatTittle,
	Stat,
	StatName,
	PokemonWrapper,
	PokemonBar,
	PokemonBarFill,
	PokemonBarText,
	BackArrow,
} from "./style";
import { shorterStatName } from "./pokemonShortName";
import {
	selectColour,
	selectStatColour,
} from "../../ulity/selectPokemonColor";
import { Link } from "react-router-dom";

const Pokemon: React.FC = () => {
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (typeof pokemon === "undefined") {
			dispatch(fetchPokemon());
		}
	}, []);

	const pokemon = useSelector((state: IState) =>
		selectPokemon(state, params.id)
	);

	if (!pokemon) return null;

	const { sprites } = pokemon;

	return (
		<>
			<ImageWrapper bg={selectColour([pokemon.types[0].type.name])}>
				<Link to={"/"}>
					<BackArrow size={30} color={"white"} />
				</Link>
				<img src={`${sprites.front_default}`} alt={pokemon.name} />
			</ImageWrapper>
			<PokemonWrapper>
				<PokemonContentWrapper>
					<PokemonContent>
						<PokemonTittle> {pokemon.name}</PokemonTittle>
						<PokemonTypeWrapper>
							{pokemon.types.map((pokemon) => {
								return (
									<PokemonType bg={selectColour(pokemon.type.name)}>
										{pokemon.type.name}
									</PokemonType>
								);
							})}
						</PokemonTypeWrapper>
						<SizeContanier>
							<SizeWrapper>
								<Size>{pokemon.weight} KG</Size>
								<PokemonStatName>Weight</PokemonStatName>
							</SizeWrapper>
							<SizeWrapper>
								<Size>{pokemon.height} M </Size>
								<PokemonStatName>Height</PokemonStatName>
							</SizeWrapper>
						</SizeContanier>
					</PokemonContent>
				</PokemonContentWrapper>
				<BaseStatTittle>Base Stats</BaseStatTittle>

				{pokemon.stats.map((stat) => {
					return (
						<Stat>
							<StatName> {shorterStatName(stat.stat.name)}</StatName>
							<PokemonBar>
								<PokemonBarFill
									width={`${stat.base_stat / 3}%`}
									color={selectStatColour(stat.stat.name)}
								/>
								<PokemonBarText>{stat.base_stat}/300</PokemonBarText>
							</PokemonBar>
						</Stat>
					);
				})}
			</PokemonWrapper>
		</>
	);
};

export default Pokemon;
