import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Wrapper';
import Todos, { fetchTodo } from './Todos';
import SingleTodo, { getTodo } from './SingleTodo';
import CreateTodo from './NewTodo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/todo",
        loader: fetchTodo,
        element: <Todos />,
      },
      {
        path: "/todo/:todoId",
        loader: getTodo,
        element: (
          <SingleTodo />
        ),
      },
      {
        path: "/todo/new",
        loader: CreateTodo,
        element: (
          <CreateTodo />
        )
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();