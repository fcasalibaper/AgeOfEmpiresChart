import { generateMedia } from "styled-media-query";
import { PADDING_DESKTOP_LR } from './variables.styled';

export const containerMaxWidth = 1100 + (PADDING_DESKTOP_LR*2) ;

export const pxs = {
  xl: 1440,
  lg: 1200,
  md: 1024,
  sm: 768,
  xs: 480,
};

export const sizes = {
  xl: `${pxs.xl}px`,
  lg: `${pxs.lg}px`,
  md: `${pxs.md}px`,
  sm: `${pxs.sm}px`,
  xs: `${pxs.xs}px`,
};

export const media = generateMedia(sizes);