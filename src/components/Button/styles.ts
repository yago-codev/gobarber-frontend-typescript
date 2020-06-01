import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  background: #ff9000;
  height: 56px;
  border: 0;
  border-radius: 10px;
  color: #312e38;
  font-weight: 500;
  margin-top: 16px;
  padding: 0 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
