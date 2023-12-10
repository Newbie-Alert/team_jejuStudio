import styled from "styled-components";
import { FadeAnimation } from "../../globalStyle/GlobalAnimation";

const HomeBtn = styled.button.attrs((props) => ({
  type: 'button'
}))`
  width: 90px;
  height: 60px;
  border-radius: 9px;
  font-size: 1.25rem;
  border: 2px solid #1fa1d4;
  position: fixed;
  bottom: 3%;
  left: 3%;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const MatchingContainer = styled.div`
  width: 100%;
  padding: 0.5rem 6rem;
  background-image: linear-gradient(#fff, transparent);
  position: relative;
  @media screen and (max-width: 800px) {
    padding: 0.5rem 1rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const MatchingUserSection = styled.section`
  width: 100%;
  padding: 1rem 3rem;
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const MatchingUserTitle = styled.h3`
  width: 100%;
  font-weight: 600;
  font-size: 1.65rem;
  margin-block: 0.5rem;
  @media screen and (max-width: 800px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const UserSelectedList = styled.div`
  width: 100%;
  border-bottom: 1px solid #121212;
`;

const SelectList = styled.ul`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  font-size: 1.5rem;
  margin-block: 1rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 800px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;

const ListStyle = styled.li`
  padding: 0.5rem 1rem 0.6rem;
  width: fit-content;
  height: fit-content;
  background-color: #5bc3ebff;
  border-radius: 15px;
  border-top-right-radius: 3px;
  color: white;
`;

const MatchingArtistSection = styled.section`
  width: 100%;
  padding: 1rem 5rem;
  @media screen and (max-width: 1600px) {
    padding: 1rem 3rem;
  }
  @media screen and (max-width: 1300px) {
    padding: 1rem 1rem;
  }
`;

const ArtistGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ArtistCard = styled.div`
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  padding: 1.25rem;
  border: 2px solid #5bc3ebff;
  background: linear-gradient(220deg, rgba(91, 195, 235, 1) 40%, rgba(0, 0, 0, 0) 25%);
  color: #111111;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  animation: ${FadeAnimation} 0.5s;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1.5%);
  }
`;

const ArtistImgBox = styled.div`
  width: 100%;
  height: 400px;
`;

const ArtistImg = styled.img.attrs((props) => ({
  src: props.$url
}))`
  width: 100%;
  height: 100%;
  border-radius: 9px;
  object-fit: cover;
`;

const ArtistIntroBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 600;
  white-space: normal;
  line-height: 1.5;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryList = styled.ul.attrs((props) => ({
  key: props.$key
}))`
  display: flex;
  gap: 0.5rem;
`;

const Category = styled.li.attrs((props) => ({
  key: `${props.$key}`
}))`
  width: fit-content;
  color: ${(props) => (props.$isSelect === props.children ? '#1fa1d4' : '#1d1d1d')};
`;

const ArtistNameSection = styled.div`
  width: 100%;
  text-align: right;
  font-size: 2rem;
`;

const ArtistArea = styled.h4`
  width: fit-content;
  color: ${(props) => (props.$isSelect === props.children ? '#1fa1d4' : '#1d1d1d')};
  font-weight: 900;
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & h3 {
    font-size: 1.25rem;
  }
`;

export {
  HomeBtn,
  MatchingContainer,
  MatchingUserSection,
  MatchingUserTitle,
  UserSelectedList,
  SelectList,
  ListStyle,
  MatchingArtistSection,
  ArtistGrid,
  ArtistCard,
  ArtistImgBox,
  ArtistImg,
  ArtistIntroBox,
  CategoryBox,
  CategoryList,
  Category,
  ArtistNameSection,
  ArtistArea,
  ContentBox
}