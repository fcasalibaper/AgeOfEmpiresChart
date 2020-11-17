import styled, { css } from 'styled-components';
import { media } from './breakpoints.styled';
import { TRANSITION, TOTAL_COLUMNS } from './variables.styled';
import { FlexRow } from './general.styles';

export const ColumnGrid = css`
  position: relative;
  display:flex;
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  min-height: 1px;
  max-width: 100%;
  transition: ${TRANSITION};
  
  /* for all resolutions */
  ${props => props.colSize &&`
    flex: 0 0  ${ props.colSize * 100 / TOTAL_COLUMNS}%;
    max-width: ${ props.colSize * 100 / TOTAL_COLUMNS}%;
    min-width: ${ props.colSize * 100 / TOTAL_COLUMNS}%;
  `}

  /* SM */
  ${media.greaterThan('xs')`
    ${props => props.colSizeSM &&`
      flex: 0 0 ${ props.colSizeSM * 100 / TOTAL_COLUMNS}%;
      max-width: ${ props.colSizeSM * 100 / TOTAL_COLUMNS}%;
      min-width: ${ props.colSizeSM * 100 / TOTAL_COLUMNS}%;
    `}
  `}

  /* MD */
  ${media.greaterThan('sm')`
    ${props => props.colSizeMD &&`
      flex: 0 0 ${ props.colSizeMD * 100 / TOTAL_COLUMNS}%;
      max-width: ${ props.colSizeMD * 100 / TOTAL_COLUMNS}%;
      min-width: ${ props.colSizeMD * 100 / TOTAL_COLUMNS}%;
    `}
  `}

  /* LG */
  ${media.greaterThan('md')`
    ${props => props.colSizeLG &&`
      flex: 0 0 ${ props.colSizeLG * 100 / TOTAL_COLUMNS}%;
      max-width: ${ props.colSizeLG * 100 / TOTAL_COLUMNS}%;
      min-width: ${ props.colSizeLG * 100 / TOTAL_COLUMNS}%;
    `}
	`}
	
	/* XL */
  ${media.greaterThan('lg')`
    ${props => props.colSizeXL &&`
      flex: 0 0 ${ props.colSizeXL * 100 / TOTAL_COLUMNS}%;
      max-width: ${ props.colSizeXL * 100 / TOTAL_COLUMNS}%;
      min-width: ${ props.colSizeXL * 100 / TOTAL_COLUMNS}%;
    `}
  `}

  /* XS */
  ${media.lessThan('xs')`
    ${props => props.colSizeXS &&`
      flex: 0 0 ${ props.colSizeXS * 100 / TOTAL_COLUMNS}%;
      max-width: ${ props.colSizeXS * 100 / TOTAL_COLUMNS}%;
      min-width: ${ props.colSizeXS * 100 / TOTAL_COLUMNS}%;
    `}
  `}
`;

export const Grid = styled(FlexRow)`
  ${ColumnGrid}
`;

export const GridMediaWrapper = styled(Grid)`
	flex-direction: column;
	${media.greaterThan('md')`
		flex-direction: ${props => props.direction ? props.direction : 'row' };
	`};
`;