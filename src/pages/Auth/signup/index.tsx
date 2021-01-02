import styled from '@emotion/styled';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import ButtonAtom from '../../../components/atoms/buttons';
import InputAtom from '../../../components/atoms/Inputs';
import AuthFooterOrganism from '../../../components/organims/AuthFooter';
import { AuthContext } from '../../../contexts';
import { signup } from '../../../services/auth';
import { authTypes } from '../../../types/authTypes';

const SignUp = styled.div`
  p {
    width: 100%;
    text-align: left;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 3.125rem);
`;

const FormContainer = styled.div`
  width: 75%;
  p {
    color: ${({ theme }) => theme.colors.secondary.base};
    font-weight: bold;
    font-family: sans-serif;
    font-size: 1rem;
  }
  button {
    font-weight: bold;
  }
`;

const SignUpPage = () => {
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await signup(inputValues);
    dispatch({ type: authTypes.login, payload: token?.data });
  };

  return (
    <>
      <SignUp>
        <FormContainer>
          <p>Crear cuenta</p>
          <form onSubmit={handleSubmit}>
            <InputAtom
              prevValue={inputValues}
              sendValue={setInputValues}
              inputName="name"
              inputDesign="auth"
              placeholder="Nombre"
              inputType="text"
            />
            <InputAtom
              prevValue={inputValues}
              sendValue={setInputValues}
              inputName="email"
              inputDesign="auth"
              placeholder="Email"
              inputType="text"
            />
            <InputAtom
              prevValue={inputValues}
              sendValue={setInputValues}
              inputName="password"
              inputDesign="auth"
              placeholder="Contraseña"
              inputType="password"
            />

            <ButtonAtom
              fColor="#EEEEEE"
              buttonType="submit"
              bgColor="#303030"
              buttonDesign="fill"
              width="100%"
              height="3.125rem"
              border="10px"
            >
              Crear cuenta
            </ButtonAtom>
          </form>
        </FormContainer>
      </SignUp>
      <AuthFooterOrganism
        msg="¿ya tienes cuenta?"
        linkMsg="iniciar sesion"
        href="/signin"
      />
    </>
  );
};

export default SignUpPage;
