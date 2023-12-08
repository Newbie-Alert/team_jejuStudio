import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;

  gap: 20px;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ProfileImg = styled.div`
  width: 200px;
  height: 250px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;
export const ProfileCategory = styled.ul`
  font-size: 17px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 7px;

  & span {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  & li {
    color: gray;
  }
`;
export const ProfileInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border: 2px solid lightgray;
  border-radius: 5px;
`;
export const Works = styled.div`
  column-width: 300px;
  column-gap: 15px;
  margin: 20px 0px 20px 45px;
`;
export const WorksImg = styled.img`
  display: inline-block;
  border: 1px solid lightgray;
  margin: 0;
  margin-bottom: 30px;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 380px;
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
  width: 150px;
  &:hover {
    color: black;
  }
`;
