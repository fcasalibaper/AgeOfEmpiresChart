import styled from 'styled-components';
import { Grid } from '@styles/grid.styled';
import { BOLD, COLOR_LIGHTGREEN, HEADER_HEIGHT_MOBILE } from '@styles/variables.styled';
import { media } from '@styles/breakpoints.styled';

export const HeaderStyled = styled(Grid)`
	top:0;
	background-color: #ffffff;
	z-index: 1;
	padding: 10px 0;
	box-shadow: 0 1px 2px rgba(0,0,0,0.16),
							0 1.5px 4px rgba(0,0,0,0.19);
	
	${media.lessThan('sm')`
		position: fixed;
		height: ${HEADER_HEIGHT_MOBILE}px;
	`};

	figure {
		width: 100%;
		max-width: 150px;

		${media.lessThan('sm')`
			margin: auto;
		`};
	}

	span {
		align-self:  center;
		text-align: right;
		font-size: 1rem;

		${media.lessThan('sm')`
			display:none;
		`};

		strong {
			font-weight: ${BOLD};
			font-size: 1.3em;
			color: ${COLOR_LIGHTGREEN};
		}
	}
`;