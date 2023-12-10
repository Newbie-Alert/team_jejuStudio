import React, { useState } from 'react';
import { data } from '../../shared/fakedata';
import { useNavigate } from 'react-router';
import * as St from './profileStyle';

function Profile() {
  // STATE
  const [photoCategory, setPhotoCategory] = useState('모든 작가');

  // VARIABLE
  const photoCategorys = [
    '모든 작가',
    '개인사진',
    '가족사진',
    '우정사진',
    '단체사진',
    '커플사진',
    '행사사진',
    '반려동물사진'
  ];

  // HOOK
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh'
      }}
    >
      <St.Container>
        <St.Title>소속 작가 소개</St.Title>
        <St.ButtonBox>
          {photoCategorys.map((category) => {
            return (
              <St.CategoryBtn
                onClick={(event) => {
                  setPhotoCategory(event.target.textContent);
                }}
                $photoCategory={photoCategory}
                key={category}
              >
                {category}
              </St.CategoryBtn>
            );
          })}
        </St.ButtonBox>

        <St.CardContainer>
          {data
            .filter((profile) => {
              if (photoCategory === '모든 작가') {
                return data;
              } else {
                const filter = profile.category.filter((item) => photoCategory.includes(item));
                return photoCategory.includes(...filter);
              }
            })
            .map((p) => {
              return (
                <St.Card
                  src={p.avatar}
                  key={p.id}
                  onClick={() => {
                    navigate(`/detail/${p.id}`);
                  }}
                >
                  <St.TextBox>
                    <p>{p.name} 작가</p>
                    {/* <p>{p.category[0]}</p> */}
                  </St.TextBox>
                </St.Card>
              );
            })}
        </St.CardContainer>
      </St.Container>
    </div>
  );
}

export default Profile;
