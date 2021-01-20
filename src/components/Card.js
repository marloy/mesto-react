function Card(props) {
  function handleClick() {
    props.onCardClick({card: props.card, isSelected: true});
  }
  
  return (
    <>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="cards__photo"
        onClick={ handleClick }
      />
      <button
        type="button"
        className="cards__delete-button cards__delete-button_hidden"
        name="delete-button"
      />
      <div className="cards__description">
        <p className="cards__location">{props.card.name}</p>
        <div className="cards__like-container">
          <button
            type="button"
            className="cards__like"
            name="like-button"
          />
          <span className="cards__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </>
  );
}

export default Card;