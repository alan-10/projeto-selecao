import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #291720;
  color: #FB8B24;

  padding: 1rem;

  a {
    display: block;
    height: 3rem;
    width: 190px;
    background: #FB8B24;
    border-radius: 2px;
    padding: 4px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#FB8B24')};
    }

    @media(max-width:500px) {
  
      height: 2rem;
      width: 140px;
  }
  }

  
`;