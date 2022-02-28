import React from 'react';
import '../App.css';
import spinner from '../spinner.png';

const Loading = (props) => {
  return (
    <div className="Loading">
      <img 
      src={spinner}
      alt="loading animation . . ."
      className="spinner"
      />
    </div>
  );
}

export default Loading;