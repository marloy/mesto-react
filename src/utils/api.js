class Api {
  constructor({ token, cohortID, baseURL }) {
    this._baseURL = baseURL;
    this._cohortID = cohortID;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/users/me`, {
      headers: {
        authorization: this._token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
  }

  getAllNeededData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  setUserInfo({name, about}) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
  }

  setAvatar({avatar}) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  saveCard({name, link}) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
  }

  changeLikeCardStatus(cardId, isLiked) {
    const httpMethod = isLiked ? 'PUT' : 'DELETE';
    return fetch(
      `${this._baseURL}/v1/${this._cohortID}/cards/likes/${cardId}`,
      {
        method: httpMethod,
        headers: {
          authorization: this._token,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
  }
}

const api = new Api({
  token: "37682f5b-4bfd-4bac-9745-591da8798f65",
  cohortID: "cohort-18",
  baseURL: "https://mesto.nomoreparties.co",
});

export default api;