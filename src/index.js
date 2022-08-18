import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import theme from './theme';
import './index.css';
import App from './App';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard1 from './components/screens/Dashboard1/Dashboard1';
import Notbar from './components/Notbar/Notbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <NextUIProvider theme={theme}>
         <div className="i-main-container">
            <div className="i-sub-container-left">
               <Sidebar />
            </div>
            <div className="i-sub-container-right">
               <Notbar />
               <Dashboard1 />
            </div>
         </div>
      </NextUIProvider>
   </React.StrictMode>
);
