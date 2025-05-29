import styled, { css } from 'styled-components';
import { media } from './breakpoints.styled';
import { TRANSITION, TOTAL_COLUMNS } from './variables.styled';
import { FlexRow } from './general.styles'; // FlexRow already imports RowProps

// Define an interface for the props that control column sizes and direction
interface GridStyleProps {
  colSize?: number;
  colSizeXS?: number;
  colSizeSM?: number;
  colSizeMD?: number;
  colSizeLG?: number;
  colSizeXL?: number;
  direction?: string; // Used by GridMediaWrapper
}

export const ColumnGrid = css<GridStyleProps>`
  position: relative;
  display:flex;
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  min-height: 1px;
  max-width: 100%;
  transition: ${TRANSITION};
  
  /* for all resolutions */
  ${props => (props as GridStyleProps).colSize &&`
    flex: 0 0  ${ (props as GridStyleProps).colSize! * 100 / TOTAL_COLUMNS}%;
    max-width: ${ (props as GridStyleProps).colSize! * 100 / TOTAL_COLUMNS}%;
    min-width: ${ (props as GridStyleProps).colSize! * 100 / TOTAL_COLUMNS}%;
  `}

  /* SM */
  ${media.greaterThan('xs')`
    ${props => (props as GridStyleProps).colSizeSM &&`
      flex: 0 0 ${ (props as GridStyleProps).colSizeSM! * 100 / TOTAL_COLUMNS}%;
      max-width: ${ (props as GridStyleProps).colSizeSM! * 100 / TOTAL_COLUMNS}%;
      min-width: ${ (props as GridStyleProps).colSizeSM! * 100 / TOTAL_COLUMNS}%;
    `}
  `}

  /* MD */
  ${media.greaterThan('sm')`
    ${props => (props as GridStyleProps).colSizeMD &&`
      flex: 0 0 ${ (props as GridStyleProps).colSizeMD! * 100 / TOTAL_COLUMNS}%;
      max-width: ${ (props as GridStyleProps).colSizeMD! * 100 / TOTAL_COLUMNS}%;
      min-width: ${ (props as GridStyleProps).colSizeMD! * 100 / TOTAL_COLUMNS}%;
    `}
  `}

  /* LG */
  ${media.greaterThan('md')`
    ${props => (props as GridStyleProps).colSizeLG &&`
      flex: 0 0 ${ (props as GridStyleProps).colSizeLG! * 100 / TOTAL_COLUMNS}%;
      max-width: ${ (props as GridStyleProps).colSizeLG! * 100 / TOTAL_COLUMNS}%;
      min-width: ${ (props as GridStyleProps).colSizeLG! * 100 / TOTAL_COLUMNS}%;
    `}
	`}
	
	/* XL */
  ${media.greaterThan('lg')`
    ${props => (props as GridStyleProps).colSizeXL &&`
      flex: 0 0 ${ (props as GridStyleProps).colSizeXL! * 100 / TOTAL_COLUMNS}%;
      max-width: ${ (props as GridStyleProps).colSizeXL! * 100 / TOTAL_COLUMNS}%;
      min-width: ${ (props as GridStyleProps).colSizeXL! * 100 / TOTAL_COLUMNS}%;
    `}
  `}

  /* XS */
  ${media.lessThan('xs')`
    ${props => (props as GridStyleProps).colSizeXS &&`
      flex: 0 0 ${ (props as GridStyleProps).colSizeXS! * 100 / TOTAL_COLUMNS}%;
      max-width: ${ (props as GridStyleProps).colSizeXS! * 100 / TOTAL_COLUMNS}%;
      min-width: ${ (props as GridStyleProps).colSizeXS! * 100 / TOTAL_COLUMNS}%;
    `}
  `}
`;

// Grid component inherits RowProps from FlexRow and adds GridStyleProps
export const Grid = styled(FlexRow)<GridStyleProps>`
  ${ColumnGrid}
`;

// GridMediaWrapper inherits props from Grid (RowProps & GridStyleProps)
export const GridMediaWrapper = styled(Grid)<GridStyleProps>`
	flex-direction: column;
	${media.greaterThan('md')`
		flex-direction: ${props => (props as GridStyleProps).direction ? (props as GridStyleProps).direction : 'row' };
	`};
`;