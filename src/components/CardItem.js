import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const CardItem=(props)=> {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={{pathname: props.path, state:props.data}}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src= {require(`../pic/${props.src}.jpg`)}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;