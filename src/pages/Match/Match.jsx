import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FadeAnimation } from '../../globalStyle/GlobalAnimation';
import Skeleton from '../../components/skeleton/Skeleton';
import { useNavigate } from 'react-router';

const MatchingContainer = styled.div`
  width: 100%;
  padding: 0.5rem 6rem;
  background-image: linear-gradient(#fff, transparent);
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

export default function Match() {
  const [photographer, setPhotographer] = useState();
  const userPick = JSON.parse(localStorage.getItem('question'));
  const userDataArr = [...Object.values(userPick)];
  const [isLoading, setIsLoading] = useState(true);
  const tempArr = [1, 2, 3, 4];
  const navi = useNavigate();

  const getData = async () => {
    const artistData = await axios.get('https://abrupt-meowing-inch.glitch.me/photographer');
    const artistArr = artistData.data;
    return artistArr;
  };

  const matching = async () => {
    const matchingList = [];
    // 작가들의 데이터를 돌면서 카테고리와 지역에 관한 데이터를 매칭
    // 일치하는 데이터가 있으면 count를 증가 후 그 작가의 데이터에 추가
    const artist = await getData();
    // console.log(artist); // 아티스트 불러왔고 그 뒤에 매칭 진행
    let matchPoint = 0;

    for (let i = 0; i < artist.length; i++) {
      // 8번 진행
      console.log(matchPoint);
      artist[i].area === userDataArr[2] ? (matchPoint += 1) : (matchPoint += 0); // 지역이 일치하면 point 1점
      for (let j = 0; j < artist[i].category.length; j++) {
        // 아티스트의 카테고리 요소 수 만큼
        artist[i].category[j] === userDataArr[0] ? (matchPoint += 1) : (matchPoint += 0); // 카테고리 일치 시 포인트 추가
      }
      matchingList.push({ ...artist[i], point: matchPoint });
      setPhotographer(matchingList);
    }
  };

  const navigateToDetail = (artistId) => {
    navi(`/detail/${artistId}`);
  };

  const timer = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    matching();
    timer();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <MatchingContainer>
      <MatchingUserSection>
        <MatchingUserTitle>고객님의 요청과 가장 잘 맞는 사진 작가를 찾았습니다.</MatchingUserTitle>
        <UserSelectedList>
          <SelectList>
            {userDataArr.map((el, i) => {
              return (
                <>
                  <ListStyle key={i}>{el}</ListStyle>
                </>
              );
            })}
          </SelectList>
        </UserSelectedList>
      </MatchingUserSection>
      {isLoading && (
        <ArtistGrid>
          {tempArr.map((_, i) => {
            return <Skeleton key={i} />;
          })}
        </ArtistGrid>
      )}
      {!isLoading && (
        <MatchingArtistSection>
          <ArtistGrid>
            {photographer
              ?.sort((a, b) => b.point - a.point)
              ?.slice(0, 4)
              ?.map((artist) => {
                return (
                  <ArtistCard key={artist.id} onClick={() => navigateToDetail(artist.id)}>
                    <ArtistImgBox>
                      <ArtistImg $url={artist.avatar} alt="" />
                    </ArtistImgBox>
                    <ArtistIntroBox>
                      <ArtistNameSection>
                        <h4>{artist.name}</h4>
                      </ArtistNameSection>
                      <ContentBox>
                        <h3>전문 분야</h3>
                        <CategoryBox>
                          <CategoryList>
                            {artist.category.map((el, i) => {
                              return (
                                <Category key={i} $isSelect={userDataArr[0]}>
                                  {el}
                                </Category>
                              );
                            })}
                          </CategoryList>
                        </CategoryBox>
                        <ContentBox></ContentBox>
                        <h3>지역</h3>
                        <ArtistArea $isSelect={userDataArr[2]}>{artist.area}</ArtistArea>
                      </ContentBox>

                      <ContentBox>
                        <h3>작가 소개</h3>
                        <h4> {artist.comment}</h4>
                      </ContentBox>
                    </ArtistIntroBox>
                  </ArtistCard>
                );
              })}
          </ArtistGrid>
        </MatchingArtistSection>
      )}
    </MatchingContainer>
  );
}
