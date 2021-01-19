function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_update-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__cover-avatar" onClick={ handleEditAvatarClick }>
          <img src="#" alt="Фотография пользователя" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name"></h1>
            <button type="button" className="profile__edit-button" name="edit-button" onClick={ handleEditProfileClick }></button>
          </div>
          <p className="profile__job"></p>
        </div>
        <button type="button" className="profile__add-button" name="add-button" onClick={ handleAddPlaceClick }>
        </button>
      </section>
      <section className="cards">
        <ul className="cards__grid">
        </ul>
      </section>
    </main>
  );
}

export default Main;