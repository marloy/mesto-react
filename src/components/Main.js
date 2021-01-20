import React from 'react';
import api from '../utils/api'

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo().then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__cover-avatar" onClick={ props.onEditAvatar }>
          <img src={userAvatar} alt="Фотография пользователя" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" name="edit-button" onClick={ props.onEditProfile }></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" name="add-button" onClick={ props.onAddPlace }>
        </button>
      </section>
      <section className="cards">
        <ul className="cards__grid">
        </ul>
      </section>
    </main>
  );
}

export default Main;