import React from 'react';
import useInput from '../../../hooks/useInput';

type InputProps = {
  type: 'auth';
  nameAndValue: string;
  name: string;
};

const Input: React.FC<InputProps> = ({ type, name }) => {
  const [state, handleChange] = useInput({
    values: '',
  });

  const { values } = state;

  return (
    <>
      {type === 'auth' && (
        <input
          className="defaultFont inputs__auth bold"
          type="text"
          name="values"
          value={values}
          onChange={handleChange}
          placeholder={name}
        />
      )}
    </>
  );
};

export default Input;
