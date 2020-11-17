import styled from "styled-components";
import { Grid } from "@styles/grid.styled";
import { SEMIBOLD } from "@styles/variables.styled";

export const ErrorStyled = styled(Grid)`
	h2 {
		font-size: 22px;
		color: #000000;
		letter-spacing: -0.32px;
		font-weight: ${SEMIBOLD};
		margin-top: 1.2rem;
		margin-bottom: .3em;
	}

	span {
		small {
			display: flex;
			margin-top: 0.38em;
		}
	}
`;