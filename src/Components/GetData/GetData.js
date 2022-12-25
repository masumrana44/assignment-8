import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Card from '../Card/Card';
import './GetData.css'

const GetData = () => {
    const [exercises,setExercise]=useState([])
    const [times,setTime]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setExercise(data))
    },[])
  
    const exerciseTime=(time)=>{
      const realTime=parseInt(time)
      const newTimes=[...times,realTime];
      setTime(newTimes)
    }

  
    return (
        <div className='main'>
             
             <div className='card-container'>
              {
                exercises.map(exercise=><Card key= 
                 {exercise.id} exercise={exercise}
                 hundleFunction={exerciseTime}
                 >
                
                </Card>)
                 
               }
             </div>
              
              
             <div className='exercise-details'>
               <Activity times={times} ></Activity>
             </div>
             
        </div>
    );
};

export default GetData;