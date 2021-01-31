import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `cards__delete-button ${!isOwn && 'cards__delete-button_hidden'}`
  ); 
  const cardLikeButtonClassName = `cards__like ${isLiked && 'cards__like_active'}`;

  function handleClick() {
    onCardClick({
      card: card, 
      isSelected: true
    });
  }
  
  return (
    <>
      <img
        src={card.link}
        alt={card.name}
        className="cards__photo"
        onClick={ handleClick }
      />
      <button
        type="button"
        className={cardDeleteButtonClassName}
        name="delete-button"
      />
      <div className="cards__description">
        <p className="cards__location">{card.name}</p>
        <div className="cards__like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            name="like-button"
          />
          <span className="cards__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </>
  );
}

export default Card;