import { ThemeProvider } from '@emotion/react';
import React from 'react';
import GlobalStyled from './styles/GlobalStyled';
import theme from './styles/theme';
import InputAtom from './components/atoms/Inputs'
import ButtonAtom from './components/atoms/buttons';

const App = () => {
    console.log(theme);
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <ButtonAtom width="10rem" height="5rem" buttonType="fill" fColor="#EEEEEE" bgColor="#303030">fjdslakjfhjskahfjs</ButtonAtom>
        <ButtonAtom width="10rem" height="5rem" buttonType="outline" fColor="#EEEEEE" bgColor="#303030">fjdslakjfhjskahfjs</ButtonAtom>
        <InputAtom placeholder="blabla" inputType="auth"/>
      </ThemeProvider>
  );
};

export default App;
