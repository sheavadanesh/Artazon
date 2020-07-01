import React from 'react';
import { Link } from 'react-router-dom';

const ItemIndexItem = ({ item }) => {
    let updatedPrice = (Math.round(item.price * 100) / 100).toFixed(2);
    let formattedPrice = updatedPrice.split('.').join('');
    return (
        <li className='item-index-item'>
            <Link className='item-body' to={`/items/${item.id}`}>
                <div className='photo-cont'>
                    <img className='index-item-photo' src={item.photoUrl}></img>
                </div>
                <span className='index-item-title'>{item.title}</span>
                <span className='index-item-artist'><span className='by'>by </span> {item.artist}</span>
                <div className='price-shennanigans'>
                    <span className='index-item-price'><span className='dollar-sign'>$</span>{formattedPrice.slice(0, -2)}</span>
                    <span className='mini-deci'>{updatedPrice.slice(-2)}</span>
                </div>
                <span className='free-ship-cap'>FREE Shipping by Artazon</span>
            </Link>
        </li>
    )
};

export default ItemIndexItem;