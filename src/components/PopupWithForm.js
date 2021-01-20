function PopupWithForm(props) {

  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" name={`${props.name}-close-btn`} onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" method="POST" name={`${ props.name }-form`} noValidate>
          {props.children}
          <button type="submit" className="popup__save-button" name="save-button">{props.buttonTitle}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;