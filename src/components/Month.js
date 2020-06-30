import React from 'react';
import PropTypes from 'prop-types';

function Month(props){
  return (
  <React.Fragment>
    <h3>{props.month}</h3>
    <ul>
      {props.selection.map((veg, index)=>
      <li>{veg}</li>
      )}
    </ul>
  </React.Fragment>
  )
}

export default Month