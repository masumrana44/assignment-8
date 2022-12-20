import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = (props) => {
    const {id,img,name,details,time,age}=props.exercise;
    const detail=details.slice(0,200)
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
                <button className='add-btn' type="">Add to list</button>
            </div>
        </div>
    );
};

export default Card;