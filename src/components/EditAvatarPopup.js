import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return(
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          ref={avatarRef}
          id="link-input"
          className="popup__input popup__input_el_link"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="link-input-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;