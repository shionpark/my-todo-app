import styled from 'styled-components';
import { borderStyle, flexColumnStyle } from '@/styles';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  ${flexColumnStyle};
  ${borderStyle};
  gap: 0.4rem;
  width: 100%;
  padding: 1rem;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  color: ${({ theme }) => theme.color.brandColor};
  text-transform: uppercase;
`;

export const Input = styled.input`
  ${borderStyle};
  outline: 1px solid ${({ theme }) => theme.color.brandColor};

  width: 100%;
  padding: ${({ theme }) => theme.length.sm};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.color.brandColor};
  }
`;

export const StyledButton = styled.button`
  ${borderStyle};
  background-color: ${({ theme }) => theme.color.brandColor};

  width: 100%;
  padding: ${({ theme }) => theme.length.sm};
  color: white;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.08, theme.color.brandColor)};
    transition: all 0.15s ease-out;
  }
`;
