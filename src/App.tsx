import { ThemeProvider } from '@emotion/react';
import React, { useReducer } from 'react';
import GlobalStyled from './styles/GlobalStyled';
import theme from './styles/theme';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import SignInPage from './pages/Auth/signIn/Index';
import SignUpPage from './pages/Auth/signup';
import { authReducer } from './reducers/auth';
import { AuthContext } from './contexts';

const App = () => {
  const initialState = {
    token: '',
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <IonApp>
        <AuthContext.Provider value={{state, dispatch}}>
          <IonRouterOutlet>
            <IonReactRouter>
              <Route path="/signin" exact={true} component={SignInPage} />
              <Route path="/signup" exact={true} component={SignUpPage} />
              <Redirect from="/" to="/signin" />
            </IonReactRouter>
          </IonRouterOutlet>
        </AuthContext.Provider>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
