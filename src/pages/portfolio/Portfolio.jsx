import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addImages, __getImages } from '../../redux/modules/imageSlice';
import styled from 'styled-components';
import { FadeAnimation } from '../../globalStyle/GlobalAnimation';

const InfiniteContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#1d1d1d, transparent);
  padding: 1rem 3rem;
`;

const InfiniteGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;

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
  const { images, isLoading, isError, error } = useSelector((state) => state.imageSlice);

  console.log(images);
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
      console.log(page);
      loadMoreImages();
      console.log(images);
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
            <div key={img.id}>
              <img src={img.urls.full} alt="" style={{ width: '100%', imageResolution: 'revert' }} />
            </div>
          );
        })}
      </InfiniteGrid>
    </InfiniteContainer>
  );
}
