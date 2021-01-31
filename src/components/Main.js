import React from 'react';
import api from '../utils/api'
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((initialCards) => {
      setCards(initialCards);
    }).catch((err) => console.log(err));
  }, []);

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
          {cards.map((data) => (
            <li key={data._id} className="cards__item">
              <Card
                card={data}
                onCardClick={ props.onCardClick }
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;