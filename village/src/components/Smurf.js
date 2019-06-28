import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf card m-1">
      <h3 className="list-group-item">{props.name}</h3>
      <strong className="list-group-item d-flex justify-content-between">
        <div>
          {props.height}cm
        </div>
        <div> 
          tall
        </div>
      </strong>
      <p className="list-group-item d-flex justify-content-between">
        <div>
          {props.age}/smurf years
        </div>
        <div> 
          old
        </div>
      </p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

