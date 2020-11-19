import styled from 'styled-components';
import { containerMaxWidth, media } from './breakpoints.styled';
import { REGULAR, TRANSITION, COLOR_BLUE, PADDING_DESKTOP_LR, BOLD, FONT_ROOT, PADDING_MOBILE_LR, COLOR_GREYDARK } from './variables.styled';

export const Row = styled.div`
  position:relative;
  display:flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  /* max-width:100%; */
  width:${props => props.width ? props.width : '100%'};
  
	${props => props.maxWidth &&`
    max-width: ${props.maxWidth};
  `}

  ${props => props.wrap == "true" &&`
    flex-wrap: wrap;
  `}

  ${props => props.margin &&`
    margin: ${props.margin};
  `}

  ${props => props.padd &&`
    padding: ${props.padd};
  `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width:100%;
	max-width: ${containerMaxWidth}px;
	margin: auto;
	padding: ${props => props.padd ? props.padd : `0 ${PADDING_MOBILE_LR}px`};
  flex-direction: ${props => props.column ? 'column' : 'row'};

	${media.greaterThan("sm")`
		padding: ${props => props.padd ? props.padd : `0 ${PADDING_DESKTOP_LR}px`};
	`};

  ${props => props.center &&`
    justify-content:center;
  `}

  ${props => props.justifyContent &&`
    justify-content: ${props.justifyContent};
  `}

  ${props => props.alignItems &&`
    align-items: ${props.alignItems};
  `}

  ${props => props.wrap &&`
    flex-wrap: wrap;
  `}

  ${props => props.margin &&`
    margin: ${props.margin};
  `}
`;

export const ContainerWrap = styled(Container)`
  flex-wrap: wrap;
`;

export const FlexColumn = styled(Container)`
  flex-direction:column;
`;

export const ColumnMobile = styled(Container)`
  ${media.lessThan('xs')`
    flex-direction:column;
  `};
`;

export const FlexWrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const FlexRow = styled(Row)`
  position:relative;
  display:flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};

  ${props => props.xAlign &&`
    align-items: ${props.xAlign};
  `}

  ${props => props.yAlign &&`
    justify-content: ${props.yAlign};
  `}
`;

export const AllCenter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding:0;
`;

export const UnderlineLink = styled.button`
  font-size: 14px;
  font-weight: ${REGULAR};
  line-height: 1;
  letter-spacing: -0.31px;
  color: ${COLOR_BLUE};
  cursor: pointer;
  background-color: transparent;
  border: 0;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Spacer = styled.aside`
  width: 100%;
  height: 60px;
`;

export const SeparatorRow = styled(Container)`
  transition: ${TRANSITION};
`;

export const ContainerFull = styled.div`
  /* overflow-y: scroll; */
  width:100%;
  max-width: 100%;
`;


// BUTTONS
export const UnderLinkSpan = UnderlineLink.withComponent('span');

export const ButtonStyled = styled.button`
	font-family: ${FONT_ROOT};
	border-radius: 9.6px;
	border: none;
	box-shadow: 0 1px 10px 0 rgba(50, 54, 72, 0.09),
							0 14px 29px 0 rgba(50, 54, 72, 0.1);
	height: 50px;
	padding: 1rem 2rem;
	text-transform: inherit;
	background-color: ${props => props.variant == 'outlined' ? 'transparent' : COLOR_BLUE};
	font-size: 20px;
  font-weight: ${REGULAR};
  line-height: 1;
  text-align: center;
	transition: ${TRANSITION};
	width: ${props => props.size == 'full' ? '100%' : 'auto'};
	border: transparent;
	color:  ${props => props.variant == 'outlined' ? COLOR_GREYDARK : 'white'};
	cursor: pointer;

	${media.greaterThan('sm')`
		border-radius: 16px;
		font-size: 18px;
		line-height: 1.55;
		height: 55px;
		font-weight: ${BOLD};
		/* text-transform: uppercase; */
	`};

	${props => props.disabled &&`
		background-color: lightgrey !important;
		color:  grey !important;
		cursor: none;
		user-select: none;
  	pointer-events: none;
	`}


	&:hover,
	&:focus {
		box-shadow: 0 2px 1px 0 rgba(50, 54, 72, 0.5),
								0 3px 8px 0 rgba(50, 54, 72, 0.2);
	}
`;

export const ButtonStyledA = ButtonStyled.withComponent('a');

export const BackButton = styled.div`
  position: relative;
  left: -5px;
  svg {
    height: 20px;
    color: ${COLOR_BLUE};
  }
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-size: 14px;
    }
  }
`;