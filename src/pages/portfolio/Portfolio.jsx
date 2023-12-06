import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addImages, __getImages } from '../../redux/modules/imageSlice';
import styled from 'styled-components';
import { FadeAnimation } from '../../globalStyle/GlobalAnimation';

const InfiniteContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#1d1d1d, #eee);
  padding: 1rem 3rem;
`;

const InfiniteGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 12rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;

  & div:nth-child(odd) {
    width: 300px;
    height: 200px;
    position: relative;
    top: 6rem;
    border-radius: 9px;
    justify-content: space-evenly;
    animation: ${FadeAnimation} 1s forwards;
  }
  & div:nth-child(even) {
    width: 250px;
    height: 100px;
    position: relative;
    border-radius: 9px;
    bottom: 3rem;
    animation: ${FadeAnimation} 2s forwards;
  }
  & img {
    display: block;
    width: 100%;
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

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage(page + 1);
        console.log(page);
        loadMoreImages();
        console.log(images);
      } else {
        return;
      }
    });

    return () => {
      window.removeEventListener('scroll', (e) => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          loadMoreImages();
          console.log(images);
        }
      });
    };
  }, []);

  return (
    <InfiniteContainer style={{ maxHeight: '2000px' }}>
      <InfiniteGrid>
        {images.map((img) => {
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
