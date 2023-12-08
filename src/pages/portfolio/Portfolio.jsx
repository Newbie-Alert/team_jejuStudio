import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addImages, __getImages } from '../../redux/modules/imageSlice';
import styled from 'styled-components';
import { FadeAnimation } from '../../globalStyle/GlobalAnimation';

const InfiniteContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 12rem;
`;

const InfiniteGrid = styled.div`
  width: 100%;
  height: 100%;
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
  }
`;

export default function Portfolio() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { images } = useSelector((state) => state.imageSlice);

  useEffect(() => {
    try {
      dispatch(__getImages(page));
    } catch (err) {
      return err;
    }
  }, []);

  const loadMoreImages = () => {
    try {
      dispatch(__addImages(page));
    } catch (err) {
      return err;
    }
  };

  const onScrollHandler = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage(page + 1);
      loadMoreImages();
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  });

  return (
    <InfiniteContainer>
      <InfiniteGrid>
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
      </InfiniteGrid>
    </InfiniteContainer>
  );
}
