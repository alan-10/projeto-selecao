import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`

`;

export const Header = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between ;
  width: min(1050px, 95%);
  margin: 2rem auto;
  border : 1px solid #820263;
  border-radius: 4px;
  
  padding: 2rem;

  @media(max-width:545px){
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    
  }

  div {
   display: flex;
   align-items: center;

   > div {
     display: block;
     line-height: 13px;
     a {
       line-height: 5px;
     }
   }
  }
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  strong {
    display: block;
    font-size: 25px;
    
  }

  button {
    background: #820263;
    margin-left: 25px;
    color: white ;
    border-radius: 4px;
    height: 4rem;
    width: min(200px, 18vw);
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2,'#820263')};
    } 

    & + button {
      margin-left: 10px;
    }

    @media(max-width: 545px) {
    width: 100%;
  }
  }

 
`;

export const Buttons = styled.div`
  display: flex;
`;