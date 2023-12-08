import styled, { css } from 'styled-components';
export const Card = styled.div`
  padding: 10px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  width: 195px;
  height: 245px;

  color: black;
  display: flex;
  align-items: end;
  border-radius: 8px;
  cursor: pointer;
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 30px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  margin: 80px;
  font-size: x-large;
  font-weight: 600;
`;
export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 80px);
  gap: 5px;
  margin-bottom: 15px;

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
