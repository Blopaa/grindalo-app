import { ThemeProvider } from '@emotion/react';
import React from 'react';
import GlobalStyled from './styles/GlobalStyled';
import theme from './styles/theme';
import InputAtom from './components/atoms/Inputs';
import ButtonAtom from './components/atoms/buttons';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import AuthFooterOrganism from './components/organims/AuthFooter';
import SignInPage from './pages/Auth/signIn/Index';

const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/signin" component={SignInPage} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
