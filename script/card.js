
class Card {  
  constructor(data, templateSelector, showImg) {
    this._data = data;
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
    this._buttonLike = this._element.querySelector('.button_type_like');

    this._buttonLike.addEventListener('click', () => {
      this._likeElement();
    });                    
 
    this._element.querySelector('.button_type_del').addEventListener('click', () => {
      this._delElement();
    });

    this._element.querySelector('.gallery-item__photo').addEventListener('click', () => {
      this._zoomImg()
    });
  }

  _likeElement() {
    this._buttonLike.classList.toggle('button_type_like_active');
  }

  _delElement() {
    this._element.remove();
  }

  _zoomImg() {
    this._showImg(this._data);                         
  }

}

export {Card};