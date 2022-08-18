import React from 'react';
import Card1 from '../Cards/Card1';
import './Notbar.css';

const Navbar = () => {
   return (
      <div className="align-center navbar">
         <div></div>
         <span className='vybes-name'>vybes</span>
         <Card1/>
      </div>
   );
};

export default Navbar;
