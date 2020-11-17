import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const toLeft = keyframes`
  0% {
    left: 40px;
  }
  100% {
    left: 0;
  }
`;

export const toRight = keyframes`
  0% {
    left: -40px;
  }
  100% {
    left: 0;
  }
`;

export const toBottom = keyframes`
  0% {
    top: -20px;
  }
  100% {
    top: 0;
  }
`;

export const rotate = keyframes`
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;