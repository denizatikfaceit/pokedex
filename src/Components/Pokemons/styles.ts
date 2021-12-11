import styled from "styled-components";
import { mediaQueries } from "../../ulity/mediaQueries";
import { Link } from "react-router-dom";

export const TittleWrapper = styled.div`
	height: 50px;
	background: red;
	text-align: center;
`;
export const Tittle = styled.h1`
	height: 100px;
	margin: 0;
	color: white;
	font-size: 20px;
	padding: 10px 0;
`;
export const PokemonContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 3px;
	justify-content: center;
`;
export const PokemonLinkWrapper = styled(Link)`
	width: calc(50% - 12px);
	background: ${(props: { bg: string }) => props.bg};
	margin: 3px 6px 3px 6px;
	border-radius: 10px;
	text-color: white;
	text-decoration: none;
	cursor: pointer;
	text-align: center;

	${mediaQueries("md")`
width: calc(32% - 1%);
`};

	${mediaQueries("md")`
width: calc(24% - 1%);
`};
`;
export const PokemonLink = styled.p`
	color: white;
	text-decoration: none;
	font-weight: bold;
	text-transform: capitalize;
`;
