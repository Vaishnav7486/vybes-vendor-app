import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const Dashboard = () => {
   return (
      <div className="dashboard-1">
         {/* <Sidebar /> */}
         <Navbar />
         <div className="split-container2">
            <p>this is product details screen</p>
         </div>
      </div>
   );
};

export default Dashboard;
