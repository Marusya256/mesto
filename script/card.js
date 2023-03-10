const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

class Card {  
  constructor(data, templateSelector, showImg) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._showImg = showImg;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.gallery-item')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.gallery-item__photo').src = this._link;
    this._element.querySelector('.gallery-item__photo').setAttribute('alt', this._name);
    this._element.querySelector('.gallery-item__text').textContent = this._name;

    return this._element;
  }
  
   _setEventListeners() {
    this._element.querySelector('.button_type_like').addEventListener('click', () => {
      this._toggleLike();
    });

    this._element.querySelector('.button_type_del').addEventListener('click', () => {
      this._delElement();
    });

    this._element.querySelector('.gallery-item__photo').addEventListener('click', () => {
      this._zoomImg()
    });
  }

  _toggleLike() {
    this._element.querySelector('.button_type_like').classList.toggle('button_type_like_active');
  }

  _delElement() {
    this._element.remove();
  }

  _zoomImg() {
    this._showImg(this._element);                         
  }

}

initialCards.forEach((item) => {
  const newCard = new Card(item, '#card-template');
  const cardElement = newCard.generateCard();

  document.querySelector('.gallery__list').append(cardElement);
});

export {Card};