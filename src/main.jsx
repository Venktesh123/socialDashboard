// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseProvider } from '../src/components/Context/Firebase'; // Adjust the import path accordingly

ReactDOM.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
);
