import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Store = (props) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetchData();
  });
  
  const fetchData = async () => {
    const raw = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    const data = await raw.json();
    setItems(data.data);
  }


  return (
    <div className="Store">
      <h1>Items in Store</h1>
      <p className="center">Click on an item to see more details ...</p>
      {items.map(item => (
        <h2 key={item.itemId}>
          <Link to={`/store/${item.itemId}`}>{ item.item.name }</Link>
        </h2>)
      )}
    </div>
  );
}


export default Store;