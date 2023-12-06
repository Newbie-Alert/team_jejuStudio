import React, { useState } from 'react';
import * as St from './styles';
import { Toast } from './styles';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { __doLogin, __doSignUp } from '../../redux/modules/authSlice';

export default function Login() {
  // STATES
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [postBody, setPostBody] = useState({
    email: '',
    password: '',
    nickname: ''
  });

  // REDUX STATES
  const { isError, error } = useSelector((state) => state.authSlice);

  // HOOKS
  const dispatch = useDispatch();
  const navi = useNavigate();

  // Functions
  const naviTo = (path) => {
    navi(path);
  };

  const handleChange = (e) => {
    // Validate Input by length
    const { email, password, nickname } = postBody;
    if (Boolean(postBody.email) && Boolean(postBody.nickname) && Boolean(postBody.password)) {
      setIsPassed(true);
    } else {
      setIsPassed(false);
    }
    if (email.length === 0 || password.length === 0 || nickname.length === 0) {
      setIsPassed(false);
    }
    if (isSignUp === false) {
      if (Boolean(postBody.email) && Boolean(postBody.password)) {
        setIsPassed(true);
      }
    }

    // set Input by name
    const { target } = e;
    switch (target.name) {
      case 'email':
        setPostBody({ ...postBody, email: target.value });
        break;
      case 'password':
        setPostBody({ ...postBody, password: target.value });
        break;
      case 'nickname':
        setPostBody({ ...postBody, nickname: target.value });
        break;
      default:
        return postBody;
    }
  };

  const toggleSignUp = () => {
    setIsSignUp((prev) => !prev);
  };

  const doSignUp = () => {
    try {
      dispatch(__doSignUp({ email: postBody.email, password: postBody.password }));
      if (isError === false) {
        Toast.fire({
          icon: 'success',
          title: '회원가입 완료'
        });
        setIsSignUp(false);
        setPostBody((prev) => ({
          ...prev,
          id: '',
          password: '',
          nickname: ''
        }));
      }
    } catch (err) {
      Toast.fire({
        icon: 'error',
        title: error?.message,
        text: '회원가입 오류'
      });
    }
  };

  const doLogin = () => {
    const { email, password } = postBody;
    dispatch(__doLogin({ email, password }));
    if (!!localStorage.getItem('question')) navi('/photographer');

    if (isError === true) {
      Toast.fire({
        icon: 'error',
        title: error.message,
        text: '로그인 실패'
      });
    } else {
      setPostBody((prev) => ({
        ...prev,
        email: '',
        password: '',
        nickname: ''
      }));
      Toast.fire({
        icon: 'success',
        title: '로그인 성공',
        timer: 1500
      }).then((value) => {
        value.isDismissed && naviTo('/');
      });
    }
  };

  return (
    <St.LoginPageBody>
      <St.LoginContainer>
        <St.LoginTitle>{isSignUp ? '회원가입' : '로그인'}</St.LoginTitle>
        <St.LoginInputBox>
          <St.LoginInput onChange={handleChange} name={'email'} value={postBody.email} $role={'email'} />
          <St.LoginInput onChange={handleChange} name={'password'} value={postBody.password} $role={'password'} />
          {isSignUp && <St.SignUpInput onChange={handleChange} value={postBody.nickname} name={'nickname'} />}
        </St.LoginInputBox>
        {isSignUp ? (
          <St.LoginButton onClick={doSignUp} onChange={handleChange} $isPass={isPassed} $to={'signup'}>
            가입하기
          </St.LoginButton>
        ) : (
          <St.LoginButton onClick={doLogin} onChange={handleChange} $isPass={isPassed} $to={'login'}>
            로그인
          </St.LoginButton>
        )}
        <St.LoginButton onClick={toggleSignUp} $isPass={true} $to={'signup'}>
          회원가입
        </St.LoginButton>
      </St.LoginContainer>
    </St.LoginPageBody>
  );
}
