import styled, { css } from 'styled-components';
import { FadeAnimation } from '../../globalStyle/GlobalAnimation';


export const Card = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top;
  background-size: cover;
  padding: 1rem;
  width: 300px;
  height:350px;
  color: black;
  display: flex;
  align-items: end;
  border-radius: 8px;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    height: 350px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  gap: 1rem;
  animation: ${FadeAnimation} 0.5s ease;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-bottom: 100px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: #ecebeb;
  opacity: 80%;
  padding: 5px;
  border-radius: 7px;
  & p {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${FadeAnimation} 0.5s forwards;
`;

export const Title = styled.h1`
  font-size: x-large;
  font-weight: 600;
  margin-block: 1rem;
`;

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 80px);
  gap: 5px;
  margin-block: 1rem;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(7, 80px);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(6, 80px);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(5, 80px);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(4, 80px);
  }
`;

export const CategoryBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  ${(props) => {
    if (props.$photoCategory === props.children) {
      return css`
        color: black;
        font-weight: 700;
      `;
    }
    return css`
      color: gray;
    `;
  }}
`;
