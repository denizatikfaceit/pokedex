import styled from "styled-components";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export const ImageWrapper = styled.div`
	padding: 50px;
	border-radius: 0px 0px 40px 40px;
	background: ${(props: { bg: string }) => props.bg};
	text-align: center;
`;

export const PokemonTittle = styled.h1`
	color: white;
	text-align: center;
	text-transform: capitalize;
`;
export const PokemonTypeWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;
export const PokemonBarFill = styled.div<{ width: string; color: string }>`
	width: ${(props) => props.width};
	height: 100%;
	background: ${(props) => props.color};
	border-radius: 0 10px 10px 0;
`;
export const PokemonBar = styled.div`
	position: relative;
	width: 80%;
	height: 15px;
	background: white;
	border-radius: 20px;
	overflow: hidden;
	top: 25px;
`;

export const PokemonContent = styled.div`
	width: calc(100% - 20%);
	margin: auto;
`;
export const PokemonContentWrapper = styled.div`
	margin: auto;
`;
export const PokemonType = styled.p`
	background: ${(props: { bg: string }) => props.bg};
	width: 40%;
	border-radius: 10px;
	padding-bottom: 4px;
	color: white;
	text-transform: capitalize;
`;
export const SizeContanier = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const SizeWrapper = styled.div``;
export const Size = styled.div`
	font-size: 25px;
	color: white;
`;
export const PokemonStatName = styled.p`
	line-height: 0;
	color: grey;
`;

export const BaseStatTittle = styled.h3`
	color: white;
`;

export const Stat = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;
export const StatName = styled.h4`
	margin-right: 20px;
	width: 10%;
`;

export const PokemonWrapper = styled.div`
	width: 90%;
	margin: auto;
	text-align: center;
	max-width: 500px;
`;

export const PokemonBarText = styled.div`
	font-size: 10px;
	position: absolute;
	top: 50%;
	left: 40%;
	transform: translateY(-50%);
	color: grey;
`;

export const BackArrow = styled(HiOutlineArrowNarrowLeft)`
	position: absolute;
	top: 10px;
	left: 10px;
	cursor: pointer;
`;
