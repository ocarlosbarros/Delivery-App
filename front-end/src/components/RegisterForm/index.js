import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputText from '../InputForm';

import * as S from './styled';
import ErrorCard from '../ErrorCard';
import ButtonForm from '../ButtonForm';
// import { isValid } from '../../utils';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // const NOT_FOUND = 404;

  // const disabled = isValid({ email, password });
  // const instance = axios.create({
  //   baseURL: 'http://localhost:3001/',
  // });

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <S.LoginWrapper>
      <S.FormWrapper>
        <S.Form autoComplete="off">
          <InputText
            placeholder="Nome"
            testid="common_register__input-name"
            value={ name }
            set={ setName }
          />
          <InputText
            placeholder="Email"
            testid="common_register__input-email"
            value={ email }
            set={ setEmail }
          />
          <InputText
            placeholder="Senha"
            testid="common_register__input-password"
            value={ password }
            set={ setPassword }
          />
          <div
            style={ {
              display: 'flex',
              flexDirection: 'row-reverse',
              gap: '1rem',
            } }
          >
            <ButtonForm
              click={ handleRegister }
              testid="common_register__button-register"
              type="button"
              value="CRIAR CONTA"
            />
          </div>
        </S.Form>
        {error && <ErrorCard setError={ setError } />}
      </S.FormWrapper>
    </S.LoginWrapper>
  );
}
