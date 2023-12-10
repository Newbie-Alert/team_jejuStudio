import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __doLogin, __doSignUp } from '../../redux/modules/authSlice';
import * as St from './styles';
import { Toast } from './styles';
import { useNavigate } from 'react-router';

export default function Login() {
  // REDUX STATES
  const { isError, error } = useSelector((state) => state.authSlice);

  // STATES
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [postBody, setPostBody] = useState({
    email: '',
    password: '',
    nickname: ''
  });

  // HOOKS
  const dispatch = useDispatch();
  const navi = useNavigate();

  // FUNCTIONS
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

    // Set Input by name
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

  // 회원가입 창 || 로그인 창 토글
  const toggleSignUp = () => {
    setIsSignUp((prev) => !prev);
  };

  // SIGN UP
  const doSignUp = () => {
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
    if (isError === true) {
      Toast.fire({
        icon: 'error',
        title: error?.message,
        text: '회원가입 오류'
      });
    }
  };

  // LOGIN
  const doLogin = () => {
    const { email, password } = postBody;
    dispatch(__doLogin({ email, password }));
    if (isError === true) {
      Toast.fire({
        icon: 'error',
        title: 'err',
        text: '로그인 실패'
      });
    }
    if (isError === false) {
      Toast.fire({
        icon: 'success',
        title: '로그인 성공',
        timer: 1500
      }).then((value) => {
        if (value.isDismissed) {
          if (!!localStorage.getItem('question')) {
            navi('/matching');
          } else {
            navi('/');
          }
        }
      });
      setPostBody((prev) => ({
        ...prev,
        email: '',
        password: '',
        nickname: ''
      }));
    }
  };

  // MAIN RETURN
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
          <St.LoginButton onClick={() => doLogin()} onChange={handleChange} $isPass={isPassed} $to={'login'}>
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
