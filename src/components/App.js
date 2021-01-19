import logo from '../images/header-logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header alt="Логотип Mesto" src={logo} />
        <Main />
        <Footer />
        <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonTitle="Сохранить">
          <label className="popup__label">
            <input id="name-input" className="popup__input popup__input_el_name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span id="name-input-error" className="popup__input-error"></span>
          </label>
          <label className="popup__label">
            <input id="job-input" className="popup__input popup__input_el_job" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
            <span id="job-input-error" className="popup__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="add-card" title="Новое место" buttonTitle="Создать">
          <label className="popup__label">
            <input
              id="place-input"
              className="popup__input popup__input_el_place"
              type="text"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span id="place-input-error" className="popup__input-error"></span>
          </label>
          <label className="popup__label">
            <input id="link-input" className="popup__input popup__input_el_link" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span id="link-input-error" className="popup__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="update-avatar" title="Обновить аватар" buttonTitle="Сохранить">
          <label className="popup__label">
            <input id="link-input" className="popup__input popup__input_el_link" type="url" name="avatar" placeholder="Ссылка на картинку" required />
            <span id="link-input-error" className="popup__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="delete-card" title="Вы уверены?" buttonTitle="Да" />
        <div className="popup popup_type_photo">
          <div className="popup__photo-container">
            <img src="#" alt="" className="popup__photo" />
            <button type="button" className="popup__close-button" name="photo-close-button"></button>
            <h2 className="popup__title-photo"></h2>
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
      </div>
    </div>
  );
}

export default App;
