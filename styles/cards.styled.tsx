import styled, { css } from "styled-components";
import { TRANSITION } from "./variables.styled";

// cards shadows and animation hover
export const CARD_SHADOWS = `rgba(0, 0, 0, 0.08) 0px 2px 4px 0px`;
export const CARD_SHADOWS_HOVER = `
  rgba(0, 0, 0, 0.1) 0px 2px 2.5px 0.5px,
  rgba(0, 0, 0, 0.065) 0px 8px 5px 0px,
  rgba(0, 0, 0, 0.04) 0px 9px 12px 0px,
  rgba(0, 0, 0, 0.02) 0px 12px 18px 0px
`;

export const CardsHover = css`
  box-shadow: ${CARD_SHADOWS};
  background-color: white;
  transition: ${TRANSITION};
  
  &:hover,
  &:focus {
    box-shadow: ${CARD_SHADOWS_HOVER};
  }
`;