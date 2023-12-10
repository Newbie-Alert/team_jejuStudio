import styled from "styled-components";

const IntroductionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-block: 2rem;
  padding: 0 21rem;
  @media screen and (max-width: 1200px) {
    position: relative;
    padding: 0 4rem;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }
`;

const StLeftWarpper = styled.div`
  width: 50%;
  span {
    padding: 3px;
    color: black;
    border: none;
    padding: 10px;
    font-size: 35px;
    font-weight: 900;
  }
  .spanOrange {
    color: orange;
  }
  .spanSky {
    color: lightblue;
  }
  p {
    white-space: pre-wrap;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  p {
    width: 100%;
  }
`;

const StRightWarpper = styled.div`
  width: 60%;
  height: 100%;
  text-align: left;
  background-color: #eee;
  padding: 1rem;
  border-radius: 12px;

  span {
    color: black;
    border: none;
    font-size: 18px;
    font-weight: 100;
    line-height: 2;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export {
  IntroductionContainer,
  StLeftWarpper,
  StRightWarpper
}