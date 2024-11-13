import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
    passwordcheck: yup
    .string()
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않아용')
      .required('비밀번호를 입력해주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // 입력할 때마다 실시간 검증
  });

  const onSubmit = (data) => {
    console.log('회원가입 성공:', data);
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
          {...register('passwordcheck')}
          className={errors.passwordcheck ? 'input-error' : 'input'}
        />

        {touchedFields.passwordcheck && errors.passwordcheck && (
          <p className="error">{errors.passwordcheck.message}</p>
        )}

        <button
          type="submit"
          className={isValid ? 'button' : 'button-disabled'}
          disabled={!isValid} // 조건 충족 시 활성화
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default SignUp;