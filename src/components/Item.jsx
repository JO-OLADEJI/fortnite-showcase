import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
    const data = await raw.json();
    setItem(data.data.item);
  }

  return (
    <div className="Item">
      <h1>{ item.name }</h1>
      <p>{ item.description }</p>
      <img src={ item.images.background } alt=""/>
    </div>
  );
}

export default Item;