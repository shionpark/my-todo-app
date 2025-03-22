import { borderStyle } from '@/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${borderStyle};
  border: 1px solid ${({ theme }) => theme.color.blue};
  width: 100%;
  padding: ${({ theme }) => theme.length.sm};
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;
