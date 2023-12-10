import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as St from './MatchStyles';
import Skeleton from '../../components/skeleton/Skeleton';
import { useNavigate } from 'react-router';

export default function Match() {
  // STATES
  const [photographer, setPhotographer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // HOOKS
  const navi = useNavigate();

  // VARIABLES
  const userPick = JSON.parse(localStorage.getItem('question'));
  const userDataArr = [...Object.values(userPick)];
  const tempArr = [1, 2, 3, 4];

  // FUNCTIONS

  // 사진작가 데이터 fetch
  const getData = async () => {
    const artistData = await axios.get('https://abrupt-meowing-inch.glitch.me/photographer');
    const artistArr = artistData.data;
    return artistArr;
  };

  // 작가 데이터와 유저의 데이터를 비교하여 접점이 많은 작가 추출
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

  // 작가 상세페이지로 이동
  const navigateToDetail = (artistId) => {
    navi(`/detail/${artistId}`);
  };

  // 메인으로 이동
  const navigateHome = () => {
    navi('/', { replace: true });
  };

  // 3초 딜레이 후 작가 리스트 등장
  const timer = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  // USE EFFECT
  useEffect(() => {
    matching(); // 작가 데이터 fetch 후 매칭 진행
    timer(); // 3초 후 결과 등장

    return () => {
      clearTimeout(timer); // timer 제거
    };
  }, []);

  return (
    <St.MatchingContainer>
      <St.MatchingUserSection>
        <St.MatchingUserTitle>고객님의 요청과 가장 잘 맞는 사진 작가를 찾았습니다.</St.MatchingUserTitle>
        <St.UserSelectedList>
          <St.SelectList>
            {userDataArr.map((el, i) => {
              return (
                <>
                  <St.ListStyle key={i}>{el}</St.ListStyle>
                </>
              );
            })}
          </St.SelectList>
        </St.UserSelectedList>
      </St.MatchingUserSection>
      {isLoading && (
        <St.ArtistGrid>
          {tempArr.map((_, i) => {
            return <Skeleton key={i} />;
          })}
        </St.ArtistGrid>
      )}

      {/* 매칭 된 작가 리스트 */}
      {!isLoading && (
        <St.MatchingArtistSection>
          <St.ArtistGrid>
            {photographer
              ?.sort((a, b) => b.point - a.point)
              ?.slice(0, 4)
              ?.map((artist) => {
                return (
                  <St.ArtistCard key={artist.id} onClick={() => navigateToDetail(artist.id)}>
                    <St.ArtistImgBox>
                      <St.ArtistImg $url={artist.avatar} alt="" />
                    </St.ArtistImgBox>
                    <St.ArtistIntroBox>
                      <St.ArtistNameSection>
                        <h4>{artist.name}</h4>
                      </St.ArtistNameSection>
                      <St.ContentBox>
                        <h3>전문 분야</h3>
                        <St.CategoryBox>
                          <St.CategoryList>
                            {artist.category.map((el, i) => {
                              return (
                                <St.Category key={i} $isSelect={userDataArr[0]}>
                                  {el}
                                </St.Category>
                              );
                            })}
                          </St.CategoryList>
                        </St.CategoryBox>
                        <St.ContentBox></St.ContentBox>
                        <h3>지역</h3>
                        <St.ArtistArea $isSelect={userDataArr[2]}>{artist.area}</St.ArtistArea>
                      </St.ContentBox>

                      <St.ContentBox>
                        <h3>작가 소개</h3>
                        <h4> {artist.comment}</h4>
                      </St.ContentBox>
                    </St.ArtistIntroBox>
                  </St.ArtistCard>
                );
              })}
          </St.ArtistGrid>
        </St.MatchingArtistSection>
      )}
      <St.HomeBtn onClick={() => navigateHome()}>Home</St.HomeBtn>
    </St.MatchingContainer>
  );
}
