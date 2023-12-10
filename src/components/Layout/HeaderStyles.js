import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  box-shadow: var(--box-shadow);
`;

const BrandTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 30px;
  border: 2px solid white;
  box-shadow: var(--box-shadow);
  * {
    color: white;
  }
`;

const StWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  > div {
    cursor: pointer;
  }
  .logo {
    width: 200px;
  }
  button {
    background: transparent;
    padding: 3px;
    color: white;
    border: none;
    padding: 10px;
    font-size: 20px;
    text-shadow: 2px 4px 2px gray;
    font-weight: 700;
    cursor: pointer;
  }
`;

const StHeader = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  img {
    width: 70%;
    height: 40%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const BrandLogo = styled.div`
  margin-top: 50px;
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const ButtonModalSwitch = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  background-color: #151515;
  color: white;
  opacity: 0.5;
  border-radius: 9px;
  text-align: center;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    position: fixed;
    bottom: 12%;
    right: 2%;
    font-weight: 700;
    display: block;
  }
  &:hover {
    opacity: 1;
  }
`;

const StHeaderButton = styled.div`
  margin-top: 50px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  @media screen and (max-width: 1200px) {
    transition: all 0.5s ease;
    position: absolute;
    display: ${(props) => (props.$isModal === true ? 'flex' : 'none')};
    width: 300px;
    padding: 1rem 0;
    background-color: #1d1d1d90;
    bottom: -700px;
    right: 5%;
    transform: ${(props) => (props.$isModal === true ? 'translateX(0%)' : 'translateX(100%)')};
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    z-index: 3;

    button {
      width: fit-content;
      color: white;
      text-shadow: none;
    }
  }
`;

// 스크롤 내리면 변경되는 스타일
const ChangeBrandTitle = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 30px;
  border: 2px solid white;

  box-shadow: var(--box-shadow);
  * {
    color: white;
  }
`;

const ChangeStWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  height: 120%;
  > div {
    cursor: pointer;
  }
  .logo {
    width: 200px;
  }
  button {
    background: transparent;
    padding: 3px;
    color: black;
    border: none;
    padding: 10px;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
  }
`;

const ChangeStHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
  img {
    width: 70%;
    height: 40%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const ChangeBrandLogo = styled.div`
  margin-top: 30px;
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const ChangeStHeaderButton = styled.div`
  margin-top: 50px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  @media screen and (max-width: 1200px) {
    transition: all 0.5s ease;
    position: absolute;
    display: ${(props) => (props.$isModal === true ? 'flex' : 'none')};
    width: 300px;
    padding: 1rem 0;
    background-color: #1d1d1d90;
    bottom: -690px;
    right: 5%;
    transform: ${(props) => (props.$isModal === true ? 'translateX(0%)' : 'translateX(100%)')};
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    z-index: 3;

    button {
      width: fit-content;
      color: white;
      text-shadow: none;
    }
  }
`;

export {
  StContainer,
  BrandTitle,
  StWrapper,
  StHeader,
  BrandLogo,
  ButtonModalSwitch,
  StHeaderButton,
  ChangeBrandTitle,
  ChangeStWrapper,
  ChangeStHeader,
  ChangeBrandLogo,
  ChangeStHeaderButton
}