import React from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });

    onClose();
    setName('');
    setLink('');
  }

  return(
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonTitle="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit = {handleSubmit}
    >
      <label className="popup__label">
        <Input
          id="place-input"
          className="popup__input popup__input_el_place"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={name}
          handleChange={setName}
          required
        />
        <span id="place-input-error" className="popup__input-error"></span>
      </label>
      <label className="popup__label">
        <Input
          id="link-input"
          className="popup__input popup__input_el_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          value={link}
          handleChange={setLink}
          required
        />
        <span id="link-input-error" className="popup__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;