import { Grid } from '@styles/grid.styled';
import { BOLD, REGULAR, SEMIBOLD } from '@styles/variables.styled';
import styled from "styled-components";
import { media } from '@styles/breakpoints.styled';

export const DetailStyled = styled(Grid)`
	header {
		margin-bottom: 3rem;
		text-align: center;
		h1 {
			font-size: 3rem;
			line-height: 1;
			font-weight: ${REGULAR};
			strong {
				font-weight: ${BOLD};
			}
			small {
				font-size: .5em;
				font-weight: ${REGULAR};
			}
		}
	}

	h2 {
		font-size: 1.5rem;
		font-weight: ${SEMIBOLD};
		margin-bottom: 1rem;
	}

	ul {
		li {
			margin-bottom: 0.7rem;
			font-size: 1.2rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	button {
		width: 100%;
		margin-top: 4rem;
		cursor: pointer;
		${media.greaterThan('sm')`
			margin-top: 2rem;
			width: auto;
			align-self: center;
		`}
	}

`;