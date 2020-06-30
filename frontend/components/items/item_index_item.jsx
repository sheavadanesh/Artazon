import React from 'react';
import { Link } from 'react-router-dom';

const ItemIndexItem = ({ item }) => (
    <li className='item-index-item'>
        <Link to={`/items/${item.id}`}>
            <img className='index-item-photo' src={item.photoUrl}></img>
            <span className='index-item-title'>{item.title}</span>
            <span className='index-item-price'>{item.price}</span>
        </Link>
    </li>
);

export default ItemIndexItem;