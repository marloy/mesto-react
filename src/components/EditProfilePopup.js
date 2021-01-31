import React from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
    onClose();
  }

  React.useEffect(() => {
    if(currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]); 

  return(
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <Input
          id="name-input"
          className="popup__input popup__input_el_name"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name || ''}
          handleChange={setName}
        />
        <span id="name-input-error" className="popup__input-error"></span>
      </label>
      <label className="popup__label">
        <Input
          id="job-input"
          className="popup__input popup__input_el_job"
          type="text"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          value={description || ''}
          handleChange={setDescription}
        />
        <span id="job-input-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;