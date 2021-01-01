import React from 'react';
import useInput from '../../../hooks/useInput';
import styled from '@emotion/styled';

type InputProps = {
  inputType: 'auth';
  placeholder: string;
};

const Input = styled.input`
  border-radius: 10px;
  border: none;
  outline: none;
  height: 100%;
  width: calc(100% - 1rem);
  min-width: 250px;
  min-height: 50px;
  transition: all 0.4s;
  background-color: ${({theme}) => theme.colors.white};
  padding-left: 1rem;

  &:focus,
  &:hover,
  &:active {
    background-size: 100% 0.1em;
    &::placeholder {
      opacity: 0.7;
    }
  }

  &::placeholder {
    transition: opacity 0.2s;
    color: ${({theme}) => theme.colors.secondary.base};
    opacity: 1;
  }
`;

const InputAtom: React.FC<InputProps> = ({ inputType, placeholder }) => {
  const [state, handleChange] = useInput({
    values: '',
  });

  const { values } = state;

  return (
    <>
      {inputType === 'auth' && (
        <Input
          className="inputs__auth"
          type="text"
          name="values"
          value={values}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default InputAtom;
