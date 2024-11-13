import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import './signup.css';

const SignUp = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('올바른 이메일 형식이 아닙니다.')
      .required('이메일을 입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 최대 16자 이하여야 합니다.')
      .required('비밀번호를 입력해주세요.'),
    passwordCheck: yup 
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 확인을 입력해주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // 입력할 때마다 실시간 검증
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck, // 백엔드가 요구하는 이름으로 전송
      });
      console.log('회원가입 성공:', response.data);
      alert('회원가입 성공! 로그인 페이지로 이동합니다.');
      window.location.href = '/login'; // 로그인 페이지로 이동
    } catch (error) {
      console.error('회원가입 실패:', error.response?.data || error.message);
      alert('회원가입 실패: ' + (error.response?.data?.message || '서버 오류가 발생했습니다.'));
    }
  };

  return (
    <div className="container">
      <h2 className="title">회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register('email')}
          className={errors.email ? 'input-error' : 'input'}
        />
        {touchedFields.email && errors.email && (
          <p className="error">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register('password')}
          className={errors.password ? 'input-error' : 'input'}
        />
        {touchedFields.password && errors.password && (
          <p className="error">{errors.password.message}</p>
        )}

        <input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          {...register('passwordCheck')}
          className={errors.passwordCheck ? 'input-error' : 'input'}
        />
        {touchedFields.passwordCheck && errors.passwordCheck && (
          <p className="error">{errors.passwordCheck.message}</p>
        )}

        <button
          type="submit"
          className={isValid ? 'button' : 'button-disabled'}
          disabled={!isValid}
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default SignUp;
