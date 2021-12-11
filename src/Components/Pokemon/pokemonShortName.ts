export const shorterStatName = (name: string) => {

	switch (name) {
		case "special-defense":
			return "SDEF";
		case "special-attack":
			return "SATK";
		case "attack":
			return "ATK";
		case "defense":
			return "DEF";
		case "speed":
			return "SPD";
		case "hp":
			return "HP";
		default:
			return name;
	}
};
