import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__cover-avatar"
          onClick={ props.onEditAvatar }
        >
          <img
            src={currentUser.avatar}
            alt="Фотография пользователя"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              name="edit-button"
              onClick={ props.onEditProfile }
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          name="add-button"
          onClick={ props.onAddPlace }
        />
      </section>
      <section className="cards">
        <ul className="cards__grid">
          {props.cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={ props.onCardClick }
                onCardLike={ props.onCardLike }
                onCardDelete={ props.onCardDelete }
              />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;