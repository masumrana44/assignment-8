import React from 'react';
import './Activity.css';
import Myself from '../img/IMG_20221120_091518-removebg-preview.png'
import Icons from '../Icons/Icons';

const Activity = () => {
    return (
        <div className='exercise-details'>
           <div className='myself'>
               <img src={Myself}></img>
               <h2>Masum Rana</h2>
              <div className='person-details'>
              <span> <Icons/></span>
               <p>Lakshmipur,Bangladesh</p>
                
              </div>
           </div>

        </div>
    );
};

export default Activity;