import { ThemeProvider } from '@emotion/react';
import React from 'react';
import GlobalStyled from './styles/GlobalStyled';
import theme from './styles/theme';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import SignInPage from './pages/Auth/signIn/Index';
import SignUpPage from './pages/Auth/signup';

const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
