import React from 'react';

function ImagePopup({
  card,
  onClose
}) {
  const isOpen = !!card;
  
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
    <div className={`popup popup_type_photo ${card && 'popup_opened'}`} onMouseDown={handleOverlayClose}>
      <div className="popup__photo-container">
        <img 
          src={card.link}
          alt={card.name}
          className="popup__photo"
        />
        <button
          type="button"
          className="popup__close-button"
          name="photo-close-button"
          onClick={onClose}
        />
        <h2 className="popup__title-photo">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;