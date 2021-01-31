import React from 'react';
import logo from '../images/header-logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({card: {}, isSelected: false});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then(res => {
      setCurrentUser(res);
    })
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({card: {}, isSelected: false});
  }

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about}).then(res => setCurrentUser(res));
  }

  function handleUpdateAvatar({avatar}) {
    api.setAvatar({avatar}).then(res => setCurrentUser(res));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header alt="Логотип Mesto" src={logo} />
          <Main
            onEditProfile={ handleEditProfileClick }
            onAddPlace={ handleAddPlaceClick }
            onEditAvatar={ handleEditAvatarClick }
            onCardClick={ handleCardClick }
          />
          <Footer />
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} 
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            name="add-card"
            title="Новое место"
            buttonTitle="Создать"
            isOpen={ isAddPlacePopupOpen }
            onClose={ closeAllPopups }
          >
            <label className="popup__label">
              <input
                id="place-input"
                className="popup__input popup__input_el_place"
                type="text"
                name="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span id="place-input-error" className="popup__input-error"></span>
            </label>
            <label className="popup__label">
              <input
                id="link-input"
                className="popup__input popup__input_el_link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span id="link-input-error" className="popup__input-error"></span>
            </label>
          </PopupWithForm>
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups} 
            onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm
            name="delete-card"
            title="Вы уверены?"
            buttonTitle="Да"
          />
          <ImagePopup 
            card={selectedCard.isSelected && selectedCard.card}
            onClose={ closeAllPopups }
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
