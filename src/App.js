import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Aboutus from './Aboutus';
import Login from './component/Login';
import Register from './component/Register';
import Rootlayout from './component/Rootlayout';
import Yoga from './component/yoga/Yoga';
import YogaAsanas from './component/yoga/YogaAsanas';
import Tourism from './component/Tourism';
import CareTaker from './component/CareTaker';
import CareCard from './component/CareCard';
import AddPost from './component/AddPost';
import ViewPost from './component/ViewPost';
import UserLoginStore from './contexts/UserLoginStore';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/Login', element: <Login /> },
        { path: '/Register', element: <Register /> },
        { path: '/Aboutus', element: <Aboutus /> },
        { path: '/Yoga', element: <Yoga /> },
        { path: '/YogaAsanas', element: <YogaAsanas /> },
        { path: '/Tourism', element: <Tourism /> },
        { path: '/careTaker', element: <CareTaker /> },
        { path: '/CareCard', element: <CareCard /> },
        { path: '/AddPost', element: <AddPost /> },
        { path: '/ViewPost', element: <ViewPost /> },
      ],
    },
  ]);

  return (
    <div className="App">
        <UserLoginStore>
     <RouterProvider router={router}/>
     </UserLoginStore>
    </div>
  );
}

export default App;