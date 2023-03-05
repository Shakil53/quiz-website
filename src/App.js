import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Course from './components/Header/Course/Course';
import Order from './components/Header/Order';
import Quiz from './components/Quiz/Quiz';
import Home from './Home/Home';
import Main from './Layout/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('course.json'),
          element: <Home></Home>
        },

        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },

        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/order',
          element: <Order></Order>
        }
      ]

    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
