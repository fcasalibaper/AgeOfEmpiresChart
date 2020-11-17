
import { createGlobalStyle } from 'styled-components';
import { media } from "./breakpoints.styled";
import { FONT_ROOT, FONT_SIZE_ROOT, HEADER_HEIGHT_MOBILE } from './variables.styled';

const scrollbartrackcolor = 'transparent';
const scrollbarcolor = 'rgba(0,0,0,.3)';
const scrollbarsize = '4px';
const scrollbarminlength = '4px'; /* Minimum length of scrollbar thumb (width of horizontal, height of vertical) */

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size:${FONT_SIZE_ROOT}px;
	}
	::-webkit-scrollbar {
		height: ${scrollbarsize};
		width: ${scrollbarsize};
	}
	::-webkit-scrollbar-track {
		background-color: ${scrollbartrackcolor};
	}
	::-webkit-scrollbar-thumb {
		background-color: ${scrollbarcolor};
		/* Add :hover, :active as needed */
	}
	::-webkit-scrollbar-thumb:vertical {
		min-height: ${scrollbarminlength};
	}
	::-webkit-scrollbar-thumb:horizontal {
		min-width: ${scrollbarminlength};
	}
  #__next {
		max-width: 100%;
		width: 100%;
    height: 100%;
    min-height: 100%;
	}
  body,
  html, #root {
    /* height:100%; */
    min-height: 100%;
    
    margin: 0;
    padding: 0;
    font-family: ${FONT_ROOT};
    color: black;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;

    .react-datepicker { display:flex !important }
  }
	body {
		padding-top: ${HEADER_HEIGHT_MOBILE}px;
		${media.greaterThan("sm")`
			padding-top: 0;
		`}
	}
  * {
    box-sizing:border-box;
    min-height: 0;
    min-width: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    
    &:hover,
    &:focus {
      outline:none !important;
    }
  }

  ul {
    margin:0;
    padding: 0;
  }
  li {
    list-style-type: none
  }

  :hover,
  :focus {
    outline:none;
  }

  input, select { font-size: 100%; }

  a,
  button {
    text-decoration: none;
    height: auto;

    &:hover,
    &:focus {
      outline: none !important;
    }
  }
`;
