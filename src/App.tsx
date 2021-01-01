import { ThemeProvider } from '@emotion/react';
import React from 'react';
import GlobalStyled from './styles/GlobalStyled';
import theme from './styles/theme';
import InputAtom from './components/atoms/Inputs'

const App = () => {
    console.log(theme);
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <InputAtom placeholder="email" inputType="auth" />
      </ThemeProvider>
  );
};

export default App;
