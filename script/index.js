const buttonEdit = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup-edit');
const buttonClose = document.querySelector('.button_type_close');

const userName = document.querySelector('.popup__input_user_name');
const userAbout = document.querySelector('.popup__input_user_about');

const infoName = document.querySelector('.profile__info-name');
const infoAbout = document.querySelector('.profile__info-about');

function openPopup (popup) {
  popup.classList.add('popup_opened');
}
  
function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', function () {
  openPopup(popupEdit);
  userName.value = infoName.textContent;
  userAbout.value = infoAbout.textContent;
});

buttonClose.addEventListener('click', function () {
  closePopup(popupEdit);
});



const formElement = document.querySelector('.popup__container'); 

function handleFormSubmit (evt) {
  evt.preventDefault();

  infoName.textContent = userName.value;
  infoAbout.textContent = userAbout.value;

  closePopup(popupEdit);
}

formElement.addEventListener('submit', handleFormSubmit);


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

const cardContainer = document.querySelector('.gallery__list');
const cardTemplate = document.querySelector('#card-template').content;

function addCard(item) {
  const cardElement = cardTemplate.querySelector('.gallery-item').cloneNode(true);
  const galleryPhoto = cardElement.querySelector('.gallery-item__photo');  
  cardElement.querySelector('.gallery-item__text').textContent = item.name;
  galleryPhoto.src = item.link;
  galleryPhoto.setAttribute('alt', item.name);

  cardElement.querySelector('.button_type_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('button_type_like_active');
  })                                  
        
  const buttonDelCard = cardElement.querySelector('.button_type_del');
        
  buttonDelCard.addEventListener('click', function () {
    gallery.shift(cardElement);
    cardElement.remove()
  });

  cardContainer.prepend(cardElement);

  galleryPhoto.addEventListener('click', function () {
    showImg(item);
  });


  return cardElement;
}

const gallery = initialCards.map(addCard);

const popupView = document.querySelector('.popup-view');
const buttonCloseImg = document.querySelector('#close-img');
const popupPhoto = popupView.querySelector('.popup__photo');
const popupLabel = popupView.querySelector('.popup__label');
const galleryPhoto = document.querySelectorAll('.gallery-item__photo'); 

buttonCloseImg.addEventListener('click', function () {
    closePopup(popupView);
  });

function showImg(item) {
  openPopup(popupView);

  popupLabel.textContent = item.name;
  popupPhoto.src = item.link;
  popupPhoto.setAttribute('alt', item.name);

}


console.log(initialCards);
console.log(gallery);


const popupAdd = document.querySelector('.popup-add');
const buttonCloseAdd = document.querySelector('.close-add');
const buttonAdd = document.querySelector('.button_type_add');

buttonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
});

buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});

const imgName = document.querySelector('.popup__input_img_name');
const imgLink = document.querySelector('.popup__input_img_link');

const formElementAdd = document.querySelector('.popup-place'); 

function addFormSubmit (evt) {
  evt.preventDefault(); 

  const item = {name: imgName.value, link: imgLink.value};

  const card = addCard(item);

  closePopup(popupAdd);

  return card;

}

formElementAdd.addEventListener('submit', addFormSubmit);

