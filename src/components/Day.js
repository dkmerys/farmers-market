import React from 'react';
// import PropTypes from 'prop-types';

function Day(props){
  return (
    <React.Fragment>
      <h2>{props.day}s</h2>
      <h3>Location: {props.location} Farmers Market</h3>
      <h3>Booth: {props.booth}</h3>
      <h3>Hours: {props.hours}</h3>
      <hr/>
    </React.Fragment>
  )
}



export default Day;