import React from 'react';
import logo from '../images/header-logo.svg';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import api from '../utils/api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({card: {}, isSelected: false});
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getAllNeededData()
      .then(args => {
        const [userInfo, initialCards] = args;
        setCurrentUser(userInfo);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
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
    api.setUserInfo({name, about})
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar({avatar}) {
    api.setAvatar({avatar})
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.log(err));
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch(err => console.log(err));
  }

  function handleAddPlaceSubmit({name, link}) {
    api.saveCard({name, link})
      .then(newCard => setCards([newCard, ...cards]))
      .catch(err => console.log(err));
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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} 
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups} 
            onAddPlace={handleAddPlaceSubmit}
          />
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
