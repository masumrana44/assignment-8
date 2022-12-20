import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './GetData.css'

const GetData = () => {
    const [exercises,setExercise]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setExercise(data))
    },[])
  
    return (
        <div >
              <h3 className='heading'>Select today’s exercise</h3>
          <div className='card-container'>
          {
                exercises.map(exercise=><Card key= 
                 {exercise.id} exercise={exercise}>

                </Card>)
             }
          </div>
        </div>
    );
};

export default GetData;