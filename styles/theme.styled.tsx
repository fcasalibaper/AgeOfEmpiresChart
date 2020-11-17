import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { COLOR_BLUE, COLOR_BORDER_INPUT, COLOR_DARKGREEN, COLOR_GREYDARK, COLOR_GREYDARK3, COLOR_LIGHTBLUE, COLOR_LIGHTBLUE2, COLOR_LIGHTGREEN, COLOR_SALMON } from './variables.styled';

const form = {
	border: COLOR_BORDER_INPUT,
	placeholder: COLOR_GREYDARK3,
	text: COLOR_GREYDARK,
	error: 'red',
	validated : 'lightgreen'
}

const greenTheme = {
	header : {
		background: COLOR_DARKGREEN,
		backgroundMobile: '#ffffff',
		colors: {
			menu : '#ffffff',
		}
	},
	// hero : {
	// 	backgroundImage : HeroBici,
	// },
	section: COLOR_LIGHTGREEN,
	text : {
		default: COLOR_GREYDARK,
		span: COLOR_LIGHTGREEN,
		p: COLOR_GREYDARK,
		a: COLOR_LIGHTGREEN
	},
	slider : {
		colors: {
			titleColor: '#ffffff',
			text: '#ffffff',
			arrows: '#ffffff',
			background: COLOR_SALMON,
		}
	},
	stepper: {
		colors: {
			inactiveText: COLOR_GREYDARK,
			activeText: COLOR_LIGHTGREEN,
			line: COLOR_LIGHTBLUE,
			pastLine: COLOR_LIGHTGREEN
		}
	},
	icons: {
		background: COLOR_LIGHTBLUE2,
		check: COLOR_LIGHTGREEN,
	},
	features: {
		color: COLOR_LIGHTGREEN,
		span: COLOR_GREYDARK,
		background: COLOR_LIGHTBLUE2,
	},
	buttons : {
		color: {
			textDefault: 'white', 
			default : COLOR_LIGHTGREEN,
			underline : COLOR_LIGHTGREEN
		}
	},
	footer : {
		contactBg: COLOR_LIGHTGREEN,
		colorSpan: COLOR_GREYDARK3
	},
	form: {
		...form,
		header : {
			titleColor: COLOR_LIGHTGREEN,
			smallColor: COLOR_GREYDARK3,
			button : COLOR_LIGHTGREEN
		}
	}
}

const blueTheme = {
	header : {
		background: COLOR_BLUE,
		backgroundMobile: '#ffffff',
		colors: {
			menu : '#ffffff',
		}
	},
	// hero : {
	// 	backgroundImage : HeroBici
	// },
	section : COLOR_BLUE,
	text : {
		default: COLOR_GREYDARK,
		span: COLOR_BLUE,
		p: COLOR_GREYDARK,
		a: COLOR_BLUE
	},
	slider : {
		colors: {
			titleColor: '#ffffff',
			text: '#ffffff',
			arrows: '#ffffff',
			background: COLOR_BLUE,
		}
	},
	stepper: {
		colors: {
			inactiveText: COLOR_GREYDARK,
			activeText: COLOR_BLUE,
			line: COLOR_LIGHTBLUE,
			pastLine: COLOR_BLUE
		}
	},
	icons: {
		background: COLOR_LIGHTBLUE,
		check: COLOR_BLUE,
	},
	features: {
		color: COLOR_BLUE,
		span: COLOR_GREYDARK,
		background: COLOR_LIGHTBLUE,
	},
	buttons : {
		color: {
			textDefault: 'white', 
			default : COLOR_BLUE,
			underline : COLOR_BLUE
		}
	},
	footer : {
		contactBg: COLOR_BLUE,
		colorSpan: COLOR_GREYDARK3
	},
	form: {
		...form,
		header : {
			titleColor: COLOR_BLUE,
			smallColor: COLOR_GREYDARK3,
			button : COLOR_BLUE
		}
	}
}

const theme = {
	caucionTheme : greenTheme,
	biciTheme : blueTheme
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;