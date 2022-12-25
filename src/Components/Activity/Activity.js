import React, { useState,useEffect } from 'react';
import './Activity.css';
import Myself from '../img/IMG_20221120_091518-removebg-preview.png'
import Icons from '../Icons/Icons';

const Activity = (props) => {
    const {times}=props;
    const [brek,setBreak]=useState([])
    console.log(brek)
    
    let total=0;

     for(let i=0;i<times.length;i++){
        const element=times[i];
       total=element+total
     }
     
    
    const addToLs=(id)=>{
        const element=document.getElementById(id);
       const elementInnerText=element.innerText;      localStorage.setItem('breakTime',JSON.stringify(elementInnerText))
    };

    useEffect(()=>{
      let brekTime=localStorage.getItem('breakTime')
      const BreakTime=JSON.parse(brekTime)
       setBreak(BreakTime)
    },[])

   
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
              <h4><span id='first' onClick= 
               {()=>addToLs('first')} >10</span>s</h4>
              <h4><span id='second' onClick= 
               {()=>addToLs('second')} >20</span>s</h4>
              <h4><span id='third' onClick= 
               {()=>addToLs('third')}>30</span>s</h4>
              <h4><span id='fourth' onClick= 
               {()=>addToLs('fourth')}>40</span>s</h4>
              <h4><span id='fifth' onClick= 
               {()=>addToLs('fifth')}>50</span>s</h4>
           </div>

           <h2>Exercise Details</h2>
           <div className='exercise-corner'>
            <div className='exercise-time'>
                <p className='et-heading'>Exercise Time</p>
                <p><span className='seconds'>{total}</span> <span 
                 className='seconds'>seconds</span></p>
            </div>
            <div className='break-time'>
                <p>Break Time</p>
                <p><span className='seconds'> {brek}</span>
                <span className='seconds'>seconds</span></p>
            </div>
           </div>
            <button className='btn-act' type="">Activity 
             Completed</button>
        </div>
    );
};

export default Activity;