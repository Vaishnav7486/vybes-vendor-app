import React from 'react';
import './Card1.css'

const Card = () => {
   return (
      <div className="n-card">
         <div className="n-card-left">
            <span>0</span>
         </div>
         <div className="n-card-right">
            <span>Orders Left</span>
         </div>
      </div>
   );
};

export default Card;
