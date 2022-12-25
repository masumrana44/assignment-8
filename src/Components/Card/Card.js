import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = (props) => {
    const {hundleFunction,exercise}=props
    const {id,img,name,details,time,age}=exercise;
    const detail=details.slice(0,200)
    // console.log(hundleFunction)

    return (
        <div className='card-container'>
            <div className='card'>
                <img src={img}></img>
                <div className='card-details'>
                  <h4>{name}</h4>
                  <p>{detail}.</p>
                   <p className='age'>For Age:{age}</p>
                   <p className='age'>Time Required: {time}s</p>
                </div>
                <button onClick={()=>hundleFunction(time)}   
                 className='add-btn' type="">Add to list</button>
            </div>
            
            

        </div>
         
    );
};

export default Card;