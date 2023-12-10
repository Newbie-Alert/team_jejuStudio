import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 21rem;
  margin: auto;
  text-align: center;
  padding: 20px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 1200px){
    flex-direction: column;
    max-width: 800px;
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  max-width: 1280px; 
  margin: 0 auto;
  height: 550px;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  & img {
    max-width: 100%;
  }
`

const RecommendTitleSection = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  background-color: #5bc3ebff;
  font-weight: 600;
  color: white;
`;


export {
  MapContainer,
  MapWrapper,
  ModalContainer,
  RecommendTitleSection
}