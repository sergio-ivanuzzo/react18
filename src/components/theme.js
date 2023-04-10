import { createGlobalStyle } from "styled-components";

export const ThemeProperty = Object.freeze({
	PRIMARY: "primary",
	SECONDARY: "secondary",
	SUCCESS: "success",
	WARNING: "warning",
	ERROR: "error",
});

const theme = Object.freeze({
	[ThemeProperty.PRIMARY]: {
		main: "#C9A4FA"
	},
	[ThemeProperty.SECONDARY]: {
		main: "#98E9F5"
	},
	[ThemeProperty.SUCCESS]: {
		main: "#B3DBA2"
	},
	[ThemeProperty.WARNING]: {
		main: "#F5D78E"
	},
	[ThemeProperty.ERROR]: {
		main: "#EB5C54"
	},

	getColorByVariant: function(variant) {
		return Object.values(ThemeProperty).includes(variant) ? this[variant].main : this[ThemeProperty.ERROR].main;
	},

	hexToRGBA: (hex, alpha) => {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);

		if (alpha) {
			return `rgba(${r}, ${g}, ${b}, ${alpha})`;
		}

		return `rgb(${r}, ${g}, ${b})`;
	}
});

export default theme;

export const GlobalStyle = createGlobalStyle`
  body {
	  font-family: "Nunito", sans-serif;
  }
`;
