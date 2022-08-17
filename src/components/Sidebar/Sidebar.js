import React from 'react';
import { Avatar } from '@nextui-org/react';
import './Sidebar.css'

const Sidebar = () => {
   return (
      <div className="sidebar-parent-component">
         <div className="justify-center">
            <Avatar
               src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
               style={{ height: '100px', width: '100px' }}
               bordered
               zoomed
            />
         </div>
         <div className="justify-center">
            <h6 className="head-style">Shahanas Bridal Jwelers</h6>
         </div>
         <div className='navbar-lists'>
          <span>Search and edit</span>
          <span>Add products</span>
          <button className='s-button'>Logout</button>
         </div>
      </div>
   );
};

export default Sidebar;
