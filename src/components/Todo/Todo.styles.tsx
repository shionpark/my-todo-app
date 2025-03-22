import { borderStyle, flexColumnStyle } from '@/styles';
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

export const TodoListSection = styled.div`
  ${flexColumnStyle};
  border: 1px solid ${({ theme }) => theme.color.blue};
  align-items: start;
  width: 100%;
`;
