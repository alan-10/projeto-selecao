import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface InputProps {
  isError: boolean;
}

export const Container = styled.div`
  width: min(650px, 90%);
  margin: 0 auto 2rem;
  //margin-left: 4rem;
`;

export const Title = styled.h2`
  width: min(400px, 100%);
  font-size: 2.5rem;
`;

export const Form = styled.form<InputProps>`
  display: flex;
  margin-top: 1.5rem;

  
input {
  flex: 1;
  outline: none;
  border: 0;
  background: #e9edc9;
  padding: 7px;
  border:1px solid #e9edc9;
  font-size: 1rem;

  ${props => props.isError && css`
    border-color: red;
    border-right-color: #e9edc9;
  ` }

}
  button {
    width: min(200px, 20vw);
    height: 3rem;
    border: 0;
    background: #FB8B24;
    border-radius:  0 5px 5px 0;

    transition: background-color 0.2s;
    
    &:hover {
      background: ${shade(0.2,'#FB8B24')};
    }
  }
`;

export const Repositorie = styled.div`
position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 6rem;
  background: #e9edc9;
  padding: 5px;
  border-radius: 5px;

  display: flex;
  align-items: center;

 
  transition: transform 0.2s;


  &:hover {
    transform: translateX(20px);
  }

  a{
    display: flex;
    align-items: center;
    color: #463f3a;
     strong {
      margin: 0;
      font-size: 20px;
    }
     p {
      margin: 0;
    }
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }


`;

export const PhraseErro = styled.p`
  color: ${shade(0.5, 'red')};
`;