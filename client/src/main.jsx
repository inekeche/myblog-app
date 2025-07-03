import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BlogProvider } from './context/BlogContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </React.StrictMode>
);
