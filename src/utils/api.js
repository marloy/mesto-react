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

  saveUserInfo(data) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
  }

  saveAvatar(data) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      })
  }

  saveCard(data) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
      });
  }

  deleteCard(data) {
    return fetch(`${this._baseURL}/v1/${this._cohortID}/cards/${data._id}`, {
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

  setLike(data) {
    return fetch(
      `${this._baseURL}/v1/${this._cohortID}/cards/likes/${data._id}`,
      {
        method: "PUT",
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

  deleteLike(data) {
    return fetch(
      `${this._baseURL}/v1/${this._cohortID}/cards/likes/${data._id}`,
      {
        method: "DELETE",
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