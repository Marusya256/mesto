import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './constants.js';

const buttonEdit = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup-edit');
const buttonCloseEdit = document.querySelector('.close-edit');

const userName = document.querySelector('.popup__input_user_name');
const userAbout = document.querySelector('.popup__input_user_about');

const infoName = document.querySelector('.profile__info-name');
const infoAbout = document.querySelector('.profile__info-about');

const galleryList = document.querySelector('.gallery__list');

const formsConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_sub',
  errorClass: 'popup__input_type_error',
  errorActive: 'popup__input-error_active',
  buttonSubInactive: 'button_type_sub_inactive',
  buttonTypeSubAdd: '.button_type_sub-add'
};

const validEdit = new FormValidator(formsConfig, popupEdit);
validEdit.enableValidation();

function renderCards (cardData) {
  const newCard = new Card(cardData, '#card-template', showImg);
  const cardElement = newCard.generateCard();

  return cardElement;
}


initialCards.forEach((cardData) => {
  const cardEl = renderCards(cardData);

  galleryList.append(cardEl); 
});


function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupIsOpened = document.querySelector('.popup_opened');
    closePopup(popupIsOpened);
  }
}

function closePopupOverlay(evt) {
  const popupIsOpened = document.querySelector('.popup_opened');
  if (evt.target === popupIsOpened) {
    closePopup(popupIsOpened);
   }
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
  document.addEventListener("mousedown", closePopupOverlay);
}
  
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupEsc);
  document.removeEventListener("mousedown", closePopupOverlay);
}

buttonEdit.addEventListener('click', function () {
  openPopup(popupEdit);

  userName.value = infoName.textContent;
  userAbout.value = infoAbout.textContent;
});

buttonCloseEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});


const formElementEdit = document.querySelector('.popup-edit'); 

function handleFormEditSubmit (evt) {
  evt.preventDefault();

  infoName.textContent = userName.value;
  infoAbout.textContent = userAbout.value;

  closePopup(popupEdit);
}

formElementEdit.addEventListener('submit', handleFormEditSubmit);

const popupView = document.querySelector('.popup-view');
const buttonCloseImg = document.querySelector('#close-img');
const popupPhoto = popupView.querySelector('.popup__photo');
const popupLabel = popupView.querySelector('.popup__label');

buttonCloseImg.addEventListener('click', function () {
    closePopup(popupView);
});

function showImg(cardData) {
  openPopup(popupView);

  popupLabel.textContent = cardData.name;
  popupPhoto.src = cardData.link;
  popupPhoto.setAttribute('alt', cardData.name);
}

const popupAdd = document.querySelector('.popup-add');
const buttonCloseAdd = document.querySelector('.close-add');
const buttonAdd = document.querySelector('.button_type_add');
const validAdd = new FormValidator(formsConfig, popupAdd);
validAdd.enableValidation();

buttonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
});

buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});

const imgName = document.querySelector('.popup__input_img_name');
const imgLink = document.querySelector('.popup__input_img_link');
const formElementAdd = document.querySelector('.popup-place'); 

function handleCardFormSubmit (evt) {
  evt.preventDefault(); 

  const cardData = {name: imgName.value, link: imgLink.value};

  const cardEl = renderCards(cardData);
  galleryList.prepend(cardEl);

  closePopup(popupAdd);

  imgName.value = '';
  imgLink.value = '';
  validEdit.disableButton();

}

formElementAdd.addEventListener('submit', handleCardFormSubmit);

