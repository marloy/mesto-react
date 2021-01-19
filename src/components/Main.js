function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__cover-avatar" onClick={ props.onEditAvatar }>
          <img src="#" alt="Фотография пользователя" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name"></h1>
            <button type="button" className="profile__edit-button" name="edit-button" onClick={ props.onEditProfile }></button>
          </div>
          <p className="profile__job"></p>
        </div>
        <button type="button" className="profile__add-button" name="add-button" onClick={ props.onAddPlace }>
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