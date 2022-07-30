import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles.css';

// ReactDOM.render(<App/>, document.getElementById('root'));

import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)