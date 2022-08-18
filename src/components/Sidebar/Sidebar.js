import React from 'react';
import { Avatar } from '@nextui-org/react';
import './Sidebar.css';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { FaBoxOpen } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';

const Sidebar = () => {
   return (
      <div className="sidebar-parent-component">
         {/* <span className="vybes-logo">vybes</span> */}
         <div className="justify-center profile">
            <img
               className="profile-img"
               src="https://www.baknoprofiles.com/index_files/beforeimage_354.png"
               alt="profile image"
            />
            {/* <span className='profile-icon'><VscAccount/></span> */}
         </div>
         <div className="justify-center">
            <h6 className="head-style mb-3 mb-4">
               <a>Shahanas Bridal Jwelers</a>
            </h6>
         </div>
         <div className="sidebar-icons">
            <div className="s-i-sub mb-2">
               <FiEdit />
               <span className="icon-text">Edit / Update</span>
            </div>
            <div className="s-i-sub mb-2">
               <MdOutlineAddShoppingCart />
               <span className="icon-text">Add product</span>
            </div>
            <div className="s-i-sub mb-2">
               <FaBoxOpen />
               <span className="icon-text">Order details</span>
            </div>

            <button className="button s-button">Logout</button>
         </div>
      </div>
   );
};

export default Sidebar;
