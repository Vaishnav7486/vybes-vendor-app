import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import theme from './theme';
import './index.css';
import App from './App';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard1 from './components/screens/Dashboard1/Dashboard1';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <NextUIProvider theme={theme}>
         <Sidebar />
         <Navbar />
         <Dashboard1 />
      </NextUIProvider>
   </React.StrictMode>
);
