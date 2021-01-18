import logo from './images/header-logo.svg';

function App() {
  return (
    <body className="root">
      <div className="page">
        <header className="header">
          <img src={logo} alt="Логотип Mesto" className="header__logo" />
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__cover-avatar">
              <img src="#" alt="Фотография пользователя" className="profile__avatar" />
            </div>
            <div className="profile__info">
              <div className="profile__person">
                <h1 className="profile__name"></h1>
                <button type="button" className="profile__edit-button" name="edit-button"></button>
              </div>
              <p className="profile__job"></p>
            </div>
            <button type="button" className="profile__add-button" name="add-button">
            </button>
          </section>
          <section className="cards">
            <ul className="cards__grid">
            </ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
      </div>
      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button type="button" className="popup__close-button" name="edit-profile-close-btn"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" method="POST" name="edit-profile-form" novalidate>
            <label className="popup__label">
              <input id="name-input" className="popup__input popup__input_el_name" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required />
              <span id="name-input-error" className="popup__input-error"></span>
            </label>
            <label className="popup__label">
              <input id="job-input" className="popup__input popup__input_el_job" type="text" name="about" placeholder="О себе" minlength="2" maxlength="200" required />
              <span id="job-input-error" className="popup__input-error"></span>
            </label>
            <button type="submit" className="popup__save-button" name="save-button">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button type="button" className="popup__close-button" name="add-card-close-button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" method="POST" name="add-card-form" novalidate>
            <label className="popup__label">
              <input id="place-input" className="popup__input popup__input_el_place" type="text" name="name" placeholder="Название" minlength="2" maxlength="30" required />
              <span id="place-input-error" className="popup__input-error"></span>
            </label>
            <label className="popup__label">
              <input id="link-input" className="popup__input popup__input_el_link" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span id="link-input-error" className="popup__input-error"></span>
            </label>
            <button type="submit" className="popup__save-button" name="create-button">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_photo">
        <div className="popup__photo-container">
          <img src="#" alt="" className="popup__photo" />
          <button type="button" className="popup__close-button" name="photo-close-button"></button>
          <h2 className="popup__title-photo"></h2>
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button type="button" className="popup__close-button" name="delete-card-close-button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" method="POST" name="delete-card-form" novalidate>
            <button type="submit" className="popup__save-button" name="confirm-button">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_update-avatar">
        <div className="popup__container">
          <button type="button" className="popup__close-button" name="update-avatar-close-button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" method="POST" name="add-card-form" novalidate>
            <label className="popup__label">
              <input id="link-input" className="popup__input popup__input_el_link" type="url" name="avatar" placeholder="Ссылка на картинку" required />
              <span id="link-input-error" className="popup__input-error"></span>
            </label>
            <button type="submit" className="popup__save-button" name="save-button">Сохранить</button>
          </form>
        </div>
      </div>
      <template className="cards-template">
        <li className="cards__item">
          <img src="#" alt="" className="cards__photo" />
          <button type="button" className="cards__delete-button cards__delete-button_hidden" name="delete-button"></button>
          <div className="cards__description">
            <p className="cards__location"></p>
            <div className="cards__like-container">
              <button type="button" className="cards__like" name="like-button"></button>
              <span className="cards__like-counter"></span>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
