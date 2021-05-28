import { shade } from 'polished';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: rgba(242, 243, 245, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  width: min(600px, 90%);
  padding: .5rem 1rem 1rem;
  border-radius: 0.8rem;
  background: #b7b7a4 ;
  margin:3rem 0;
  
  > strong{
    display: block;
    text-align: center;
    
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap :10px;
    margin-top: 2rem;

    a {
      background: white;
      padding: 0.5rem;
      color: #820263;
      border-radius: 2px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2,'rosybrown')};
      }
    }
  }

  > button {
    position: absolute;
    right: 5px;
    top: 5px;

    cursor: pointer;
    background: none;
    border: 0;
    outline: none;
  }


`;