import styled from '@emotion/styled';
import React, { FormEvent, useContext,  useState } from 'react';
import ButtonAtom from '../../../components/atoms/buttons';
import InputAtom from '../../../components/atoms/Inputs';
import AuthFooterOrganism from '../../../components/organims/AuthFooter';
import { AuthContext } from '../../../contexts';
import { validateEmail } from '../../../regexs';
import { signin } from '../../../services/auth';
import { authTypes } from '../../../types/authTypes';

const SignIn = styled.div`
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

const Error = styled.div`
  width: calc(100% - 2rem);
  height: 3.125rem;
  background-color: ${({theme}) => theme.colors.error};
  border-radius: 10px;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  text-align: justify-content;
`;

const SignInPage: React.FC<any> = ({ history }) => {
  const [inputValues, setInputValues] = useState({});
  const [error, setError] = useState(null);

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await signin(inputValues);
    if (token?.message) {
      setError(token.message)
    } else {
      dispatch({ type: authTypes.login, payload: token?.data });
      history.replace('/home');
    }
  };

  return (
    <>
      <SignIn>
        <FormContainer>
          <p>Iniciar Sesion</p>
          {error && <Error>{error}</Error>}
          <form onSubmit={handleSubmit}>
            <InputAtom
            pattern={validateEmail}
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
              Iniciar Sesion
            </ButtonAtom>
          </form>
        </FormContainer>
      </SignIn>
      <AuthFooterOrganism
        msg="¿Aún no tienes cuenta?"
        linkMsg="crear cuenta"
        href="/signup"
      />
    </>
  );
};

export default SignInPage;
