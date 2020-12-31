import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderReactDom = () => {
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
}

if ((window as any).cordova) {
  document.addEventListener(
    'deviceready',
    () => {
      renderReactDom();
    },
    false
  );
} else {
  renderReactDom();
}
