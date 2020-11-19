import styled from "styled-components";
import { Grid } from "@styles/grid.styled";
import { BOLD, COLOR_GREYDARK, COLOR_LIGHTGREEN, REGULAR, SEMIBOLD, TRANSITION } from '@styles/variables.styled';

export const CardStyled = styled(Grid)`
	height: 100%;
	border-radius: 20px;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	transition: ${TRANSITION};
	color: ${COLOR_GREYDARK};

	${props => props.selected &&`
		background-color: ${COLOR_LIGHTGREEN};
		color: #ffffff;
	`};

	&:hover,
	&:focus {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}

	a { text-decoration: none; }


	header {
		margin-bottom: 1rem;
		h2 {
			font-weight: ${BOLD};
			font-size: 1.7rem;
		}
	}

	footer {
		h3 {
			font-size: 1.4rem;
			font-weight: ${SEMIBOLD};
		}
	}

	ul {
		margin-top: 1rem;
		
		li {
			margin-bottom: 1.2rem;
			&:last-child {
				margin-bottom: 0;
			}
			

			h4 {
				font-size: 1.2rem;
				font-weight: ${REGULAR}
			}
		}
	}

	
`;
