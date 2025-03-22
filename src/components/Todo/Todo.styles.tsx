import { borderStyle, flexColumnStyle, flexStyle } from '@/styles';
import { lighten } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flexColumnStyle};
  justify-content: center;
`;

export const TodoSection = styled.div`
  ${flexColumnStyle};
  ${borderStyle};
  width: 30rem;
  height: 100vh;
  background: white;

  padding: ${({ theme }) => theme.length.sm};
`;

export const ButtonsWrapper = styled.div`
  ${flexStyle};
  justify-content: space-between;
  width: 100%;
  gap: 0.2rem;
`;

export const FilterButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  border: none;
  padding: ${({ theme }) => theme.length.xs};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  color: ${({ isActive, theme }) => (isActive ? theme.color.white : theme.color.black)};
  background: ${({ isActive, theme }) =>
    isActive ? theme.color.blue : lighten(0.08, theme.color.subText)};
`;

export const TodoListSection = styled.div`
  ${flexColumnStyle};
  gap: 0.4rem;
  margin-top: 0.4rem;
  align-items: start;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
