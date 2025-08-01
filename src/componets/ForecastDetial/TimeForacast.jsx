import React, { Component } from 'react'
import './TimeForacast.css';

function TimeForacast(props) {
  return (
    <div>
      <div className='timeForacast_card'>
        <h1 className='Foracast_time'>{props.time}</h1>
        <img className='timeForacast_cloud' src={props.icon} alt="" />
        <h1 className='timeForacast_unit'>{props.unit}°</h1>
      </div>
    </div>
  )
}


export default TimeForacast