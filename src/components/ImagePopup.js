function ImagePopup(props) {
  return(
    <div className={`popup popup_type_photo ${props.card && 'popup_opened'}`}>
      <div className="popup__photo-container">
        <img 
          src={props.card.link}
          alt={props.card.name}
          className="popup__photo"
        />
        <button
          type="button"
          className="popup__close-button"
          name="photo-close-button"
          onClick={props.onClose}
        />
        <h2 className="popup__title-photo">{props.card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;