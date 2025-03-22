import { css } from 'styled-components';

export const borderStyle = css`
  border: none;
  border-radius: 0.8rem;
`;

export const flexStyle = css`
  display: flex;
  align-items: center;
`;

export const flexColumnStyle = css`
  ${flexStyle};
  flex-direction: column;
`;

export const AnimationStyle = css`
  transition: all 0.15s ease-out;
`;
