import React from 'react';

function PopupWithForm({
  name,
  title,
  buttonTitle,
  isOpen,
  onClose,
  children,
  onSubmit
}) {
  React.useEffect(() => {
    if(!isOpen) return;
    
    const handleEscapeClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeClose);

    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    }
  }, [isOpen, onClose]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose();
    }
  }
  
  return(
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} onMouseDown={handleOverlayClose}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          name={`${name}-close-btn`}
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          method="POST"
          name={`${ name }-form`} 
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            type="submit"
            className="popup__save-button"
            name="save-button">{buttonTitle}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;