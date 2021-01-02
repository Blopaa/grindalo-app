import React, { useEffect } from 'react';
import useInput from '../../../hooks/useInput';
import styled from '@emotion/styled';

type InputProps = {
  inputType: string;
  inputDesign: 'auth';
  placeholder: string;
  inputName: string;
  sendValue: React.Dispatch<React.SetStateAction<{}>>;
  prevValue: any;
  pattern?: string;
};

const AuthInput = styled.input`
  font-size: ${({ theme }) => theme.fonts.input.FontSize};
  line-height: ${({ theme }) => theme.fonts.input.LineHeight};
  border-radius: 10px;
  border: none;
  outline: none;
  width: calc(100% - 1rem);
  min-width: 250px;
  min-height: 50px;
  transition: all 0.4s;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 1rem;
  margin: 1rem 0;

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
    color: ${({ theme }) => theme.colors.secondary.base};
    opacity: 1;
  }
`;

const InputAtom: React.FC<InputProps> = ({
  inputDesign,
  placeholder,
  inputName,
  sendValue,
  prevValue,
  inputType,
  pattern
}) => {
  const [state, handleChange] = useInput({
    [inputName]: '',
  });

  const values = state[inputName];

  useEffect(() => {
    sendValue({ ...prevValue, [inputName]: values });
    // eslint-disable-next-line
  }, [values]);

  return (
    <>
      {inputDesign === 'auth' && (
        <AuthInput
        autoComplete="off"
        pattern={pattern}
          type={inputType}
          name={inputName}
          value={values}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default InputAtom;
