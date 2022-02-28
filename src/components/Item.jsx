import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Skeleton from './Skeleton.jsx';


const Item = (props) => {
  const [item, setItem] = useState({
    images: {}
  });
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  });
  
  const fetchData = async () => {
    const raw = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
    const response = await raw.json();
    setItem(response.data.item);
  }

  return (
    <div className="Item">
      {item.name === undefined
      ? (<div className="item-skeleton">
        <Skeleton type="header" />
        <Skeleton type="text" />
        <Skeleton type="image" />
      </div>)
      : (<div>
        <h1>{ item.name }</h1>
        <p>{ item.description }</p>
        <img src={ item.images.background } alt="a fortnite background" />
      </div>)}
    </div>
  );
}

export default Item;