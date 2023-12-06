import React from 'react';
import { data } from '../shared/fakedata';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Card = styled.div`
  padding: 10px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 200px;
  margin-bottom: 50px;
  color: black;
  display: flex;
  align-items: end;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  align-items: center;
  justify-items: center;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ecebeb;
  opacity: 80%;
  padding: 5px;
  & p {
    font-size: 12px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin: 50px;
  font-size: 25px;
  font-weight: 600;
`;

function Profile() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>소속 작가 소개</Title>
      <CardContainer>
        {data.map((p) => {
          return (
            <Card
              src={p.avatar}
              key={p.id}
              onClick={() => {
                navigate(`/detail/${p.id}`);
              }}
            >
              <TextBox>
                <p>{p.name}</p>
                <p>{p.category[0]}</p>
              </TextBox>
            </Card>
          );
        })}
      </CardContainer>
    </Container>
  );
}

export default Profile;
// {
//   name: '차은우',
//   category: ['커플', '단체'],
//   outdoor: true,
//   area: '애월',
//   comment: '감성이 가득한 작업물을 만들어드립니다.',
//   avatar: 차은우,
//   contact: 'ckdmsdn1@nbc.com'
// },
