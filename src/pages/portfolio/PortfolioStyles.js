import styled from "styled-components";
import { FadeAnimation } from "../../globalStyle/GlobalAnimation";

const InfiniteContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 12rem;
`;

const InfiniteTitle = styled.section`
  width: 100vw;
  padding: 1rem;
  margin-top: 1rem;
  color: white;
  letter-spacing: 0.5rem;
  text-align: center;
  background-color: #5bc3ebff;
  font-size: 1.5rem;
  font-weight: 600;
`;

const InfiniteGrid = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);

  & div:nth-child(odd) {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0rem;
    border-radius: 9px;
    justify-content: space-evenly;
    animation: ${FadeAnimation} 1s forwards;
  }
  & div:nth-child(even) {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 9px;
    bottom: 0rem;
    animation: ${FadeAnimation} 2s forwards;
  }
  & img {
    display: block;
    width: 100%;
    max-width: 100%;
    border-radius: 12px;
    animation: ${FadeAnimation} 1s forwards;
  }
`;


export {
  InfiniteContainer,
  InfiniteTitle,
  InfiniteGrid,
}