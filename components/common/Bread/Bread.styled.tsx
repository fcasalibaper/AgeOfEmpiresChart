import { COLOR_BLUE } from '@styles/variables.styled';
import styled from "styled-components";

export const BreadStyled = styled.div`
	position: relative;
	width: 100%;
	margin: 2rem 0 1rem;
	
	a {
		cursor: pointer;
		text-decoration: none;
		color: ${COLOR_BLUE};
		font-size: 1.2rem;
	}
`;