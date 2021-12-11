export const breakpoints = {
	sm: 320,
	md: 768,
	lg: 1024,
};

export const mediaQueries = (key) => {
	return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
