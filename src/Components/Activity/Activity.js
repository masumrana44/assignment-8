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
            <div/>
              <div className='personal-info'>
                  <h3>56<span className='parameter'>kg</span>
                  <br/>
                   <span className='weight'>Weight</span>
                  </h3>

                  <h3>5.4
                    <br/>
                   <span className='weight'>Height</span>
                  </h3>

                  <h3>24
                    <span className='parameter'>yrs</span>
                    <br/>
                   <span className='weight'>Age</span>
                   
                  </h3>

              </div>
           </div>
           <h2>Add A Break</h2>
           <div className='break'>
              <h4>10s</h4>
              <h4>20s</h4>
              <h4>30s</h4>
              <h4>40s</h4>
              <h4>50s</h4>
           </div>

           <h2>Exercise Details</h2>
           <div className='exercise-corner'>
            <div className='exercise-time'>
                <p className='et-heading'>Exercise Time</p>
                <p><span className='seconds'>00</span> <span 
                 className='seconds'>seconds</span></p>
            </div>
            <div className='break-time'>
                <p>Break Time</p>
                <p><span className='seconds'>00</span> <span 
                 className='seconds'>seconds</span></p>
            </div>
           </div>
            <button className='btn-act' type="">Activity 
             Completed</button>
        </div>
    );
};

export default Activity;