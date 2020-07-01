import React from 'react';
import { Link } from 'react-router-dom';

const ItemIndexItem = ({ item }) => (
    <li className='item-index-item'>
        <Link className='item-body' to={`/items/${item.id}`}>
            <div className='photo-cont'>
                <img className='index-item-photo' src={item.photoUrl}></img>
            </div>
            <span className='index-item-title'>{item.title}</span>
            <span className='index-item-artist'><span className='by'>by </span> {item.artist}</span>
            <span className='index-item-price'><span className='dollar-sign'>$</span>{item.price}</span>
            <span className='free-ship-cap'>FREE Shipping by Artazon</span>
        </Link>
    </li>
);

export default ItemIndexItem;