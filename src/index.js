import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Login from './components/login/Login';
import Main from './components/main/Main';

import './index.css';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
          children: [
            {
              path: '/',
              element: 'All!'
            },
            {
              path: 'Auto',
              element: 'Auto section!'
            },
            {
              path: 'Sports',
              element: 'Sports section'
            },
            {
              path: 'Entertainment',
              element: 'Entertainment section'
            },
          ]
      },
    ]
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={App} />
  </React.StrictMode>
);