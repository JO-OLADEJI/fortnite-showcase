import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton.jsx';
import Loading from './Loading.jsx';


const Store = (props) => {
  const [items, setItems] = useState([]);
  const skeletonScreenCount = [1, 2, 3, 4, 5];
  
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
      {items.length === 0
      ? skeletonScreenCount.map(num => <Skeleton key={num} type="text" />)
      // <Loading />
      : items.map(item => (
        <h2 key={item.itemId}>
          <Link to={`/store/${item.itemId}`}>{ item.item.name }</Link>
        </h2>)
      )}
    </div>
  );
}


export default Store;