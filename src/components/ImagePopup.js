function ImagePopup() {
  return(
    <div className="popup popup_type_photo">
      <div className="popup__photo-container">
        <img src="#" alt="" className="popup__photo" />
        <button type="button" className="popup__close-button" name="photo-close-button"></button>
        <h2 className="popup__title-photo"></h2>
      </div>
    </div>
  );
}

export default ImagePopup;