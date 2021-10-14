// this will do the inital call for the app to render to the component on the screen
import React from 'react';
import ReactDOM from 'react-dom';
import './default/index.css';
import App from './App';
import SignIn from './components/login/index.js';

const reRender = () => {
  ReactDOM.render( <App />, document.getElementById('root') );
}

ReactDOM.render( <SignIn reRender={reRender}/>, document.getElementById('root') );



