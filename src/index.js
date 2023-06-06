import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BlogState from './contexts/BlogState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogState>
        <App />
      </BlogState>
    </BrowserRouter>
  </React.StrictMode>
);
