import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useReducer, useState } from 'react';
import GlobalStyled from './styles/GlobalStyled';
import theme from './styles/theme';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import SignInPage from './pages/Auth/signIn/Index';
import SignUpPage from './pages/Auth/signup';
import { authReducer } from './reducers/auth';
import { AuthContext } from './contexts';
import HomePage from './pages/home';
import SpotPage from './pages/spot';
export interface initialAuthState {
  token: string | null;
  logged: boolean;
}

const App = () => {
  const initialAuthState = {
    token: null,
    logged: false,
  };
  const [logged, setLogged] = useState<initialAuthState>(initialAuthState);

  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    if (!state || !state.logged || !state.token) return;
    setLogged(state);
  }, [state]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <IonApp>
        <AuthContext.Provider value={{ state, dispatch }}>
          <IonRouterOutlet>
            <IonReactRouter>
              <Route path="/home/:id" exact={true} component={SpotPage} />
              <Route
                exact
                path="/home"
                render={(props) =>
                  logged.logged && logged.token ? (
                    <HomePage {...props} />
                  ) : (
                    <Redirect from="/" to="/signin" />
                  )
                }
              />
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
