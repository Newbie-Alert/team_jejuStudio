import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addImages, __getImages } from '../../redux/modules/imageSlice';
import * as St from './PortfolioStyles';

export default function Portfolio() {
  // STATES
  const [page, setPage] = useState(1);
  const { images } = useSelector((state) => state.imageSlice);

  // HOOKS
  const dispatch = useDispatch();

  // USE EFFECT
  useEffect(() => {
    try {
      dispatch(__getImages(page)); // 이미지 fetch
    } catch (err) {
      return err;
    }
  }, []);

  // FUNCTIONS
  // 스크롤 양이 끝까지 내려가면 API로 이미지 추가 호출
  const loadMoreImages = () => {
    try {
      dispatch(__addImages(page));
    } catch (err) {
      return err;
    }
  };

  // 스크롤 제어 - 스크롤양 + 창의 높이가 전체 body의 높이보다 커지면 이미지 추가 호출 실행
  const onScrollHandler = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage(page + 1);
      loadMoreImages();
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler); // 스크롤 이벤트

    return () => {
      window.removeEventListener('scroll', onScrollHandler); // 스크롤 이벤트 제거
    };
  });

  return (
    <>
      <St.InfiniteTitle>
        <h1>Portfolio</h1>
      </St.InfiniteTitle>
      <St.InfiniteContainer>
        <St.InfiniteGrid>
          {images?.map((img) => {
            return (
              <div
                key={img.id}
                style={{
                  border: '1px solid #eee',
                  height: 'fit-content',
                  padding: '1rem',
                  backgroundColor: 'white',
                  background: `linear-gradient(220deg, rgba(0, 0, 0, 0) 85%, rgba(91, 195, 235, 1) 25%), linear-gradient(30deg, rgba(0, 0, 0, 0) 85%, rgba(91, 195, 235, 1) 25%)`
                }}
              >
                <img src={img.urls.full} alt="" style={{ width: '100%' }} />
              </div>
            );
          })}
        </St.InfiniteGrid>
      </St.InfiniteContainer>
    </>
  );
}
