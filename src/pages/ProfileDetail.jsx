import React from 'react';
import { useParams } from 'react-router';
import { data } from '../shared/fakedata';
import styled from 'styled-components';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const ProfileImg = styled.img`
  width: 150px;
`;
const ProfileCategory = styled.ul`
  font-size: 20px;
  & li {
    font-size: 15px;
  }
`;
const ProfileInfo = styled.div`
  border: 1px solid black;
`;
function ProfileDetail() {
  const params = useParams();

  const filteredProfile = data.find((p) => {
    return p.id == params.id;
  });

  console.log(filteredProfile);
  return (
    <div>
      <ProfileBox>
        <ProfileImg src={filteredProfile.avatar} />
        <ProfileInfo>
          <p>작가이름 : {filteredProfile.name}</p>
          <ProfileCategory>
            카테고리
            {filteredProfile.category.map((c) => {
              return <li>{c}</li>;
            })}
          </ProfileCategory>
          <p>{filteredProfile.comment}</p>
          <p>contact : {filteredProfile.contact}</p>
        </ProfileInfo>
      </ProfileBox>
      <div></div>
    </div>
  );
}

export default ProfileDetail;
