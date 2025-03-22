import { AnimationStyle, borderStyle, flexStyle } from '@/styles';
import { lighten } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexStyle};
  width: 100%;
  gap: 0.4rem;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  width: 100%;

  ${borderStyle};
  border: 1px solid ${({ theme }) => lighten(0.14, theme.color.subText)};
  padding: ${({ theme }) => theme.length.sm};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => lighten(0.22, theme.color.subText)};
    ${AnimationStyle};
  }
`;

export const ItemButton = styled.div`
  ${flexStyle};
  justify-content: center;

  input[type='checkbox'] {
    zoom: 1.5;
  }
`;
