import React from 'react';
import '../App.css';

const Skeleton = (props) => {
  return (
    <div className={`Skeleton ${props.type}`}>
      <div className="shimmer-effect" />
    </div>
  );
}

export default Skeleton;