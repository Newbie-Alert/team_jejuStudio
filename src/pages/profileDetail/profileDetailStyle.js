import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { FadeAnimation } from '../../globalStyle/GlobalAnimation';

export const ProfileImg = styled.div`
  width: 150px;
  height: 180px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;
export const ProfileCategory = styled.ul`
  font-size: 15px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 7px;

  & span {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  & li {
    color: gray;
  }
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 900px;
  animation: ${FadeAnimation} 0.5s forwards;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 20px;
  width: 1280px;
`;
export const Title = styled.h1`
  margin: 30px;
  font-size: 25px;
  font-weight: 600;
`;
export const Line = styled.div`
  margin: 10px 0px;
  width: 50px;
  border: 2px solid #c9f2ff;
  border-radius: 5px;
`;
export const Works = styled.div`
  width: 1000px;
  column-width: 300px;
  column-gap: 15px;
  margin: 20px 0;
  @media screen and (max-width: 1000px) {
    width: 650px;
    column-width: 230px;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
    column-width: 180px;
  }
`;
export const WorksImg = styled.img`
  display: inline-block;
  border: 1px solid #c9f2ff;
  margin: 0;
  margin-bottom: 30px;
  padding: 10px;
  width: 300px;
  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 0.3s;
  }
  transition-duration: 0.2s;
  background-color: white;
`;

export const Btn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid gray;
  color: gray;
  width: 120px;
  &:hover {
    color: black;
  }
`;