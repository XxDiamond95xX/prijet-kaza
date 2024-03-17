/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ cardInfo }) => {
  return (
    <div className="card">
      <Link to={`/location/${cardInfo.id}`} className='card-link'>
        <img src={cardInfo.cover} alt={cardInfo.title} className="card_list_cover" />
        <h3 className="card_list_cover_title">{cardInfo.title}</h3>
      </Link>
    </div>
  );
};

export default Card;
