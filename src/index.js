import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import { CreatePlayer } from './pages/CreatePlayer';
import { Update } from './pages/Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index={true}
            element={<App />}
          />
        </Route>
        <Route
          path='/CreatePlayer'
          element={<Layout />}>
          <Route
            index={true}
            element={<CreatePlayer />}
          />
        </Route>
        <Route
          path='/Update'
          element={<Layout />}>
          <Route
            index={true}
            element={<Update />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
