const buttonEdit = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup-edit');
const buttonCloseEdit = document.querySelector('.close-edit');

const userName = document.querySelector('.popup__input_user_name');
const userAbout = document.querySelector('.popup__input_user_about');

const infoName = document.querySelector('.profile__info-name');
const infoAbout = document.querySelector('.profile__info-about');


function closePopupEsc(evt) {
  const popupIsOpened = document.querySelector('.popup_opened');
  if (evt.key === "Escape") {
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

function createCard(item) {
  const cardElement = cardTemplate.querySelector('.gallery-item').cloneNode(true); 
  cardElement.querySelector('.gallery-item__text').textContent = item.name;
  const galleryPhoto = cardElement.querySelector('.gallery-item__photo'); 
  galleryPhoto.src = item.link;
  galleryPhoto.setAttribute('alt', item.name);

  galleryPhoto.addEventListener('click', function () {
    showImg(item);
  });

  cardElement.querySelector('.button_type_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('button_type_like_active');
  })                                  
        
  const buttonDelCard = cardElement.querySelector('.button_type_del');
        
  buttonDelCard.addEventListener('click', function () {
    cardElement.remove()
  });

  return cardElement;
}

function addCard(cardElement) {
  const newCard = createCard(cardElement);
  cardContainer.prepend(newCard);
}


function renderCards(items) {
   items.forEach(addCard);
}

renderCards(initialCards);

const popupView = document.querySelector('.popup-view');
const buttonCloseImg = document.querySelector('#close-img');
const popupPhoto = popupView.querySelector('.popup__photo');
const popupLabel = popupView.querySelector('.popup__label');

buttonCloseImg.addEventListener('click', function () {
    closePopup(popupView);
  });

function showImg(item) {
  openPopup(popupView);

  popupLabel.textContent = item.name;
  popupPhoto.src = item.link;
  popupPhoto.setAttribute('alt', item.name);

}


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
const buttonSubAdd = document.querySelector('.button_type_sub-add');
const formElementAdd = document.querySelector('.popup-place'); 

function addFormSubmit (evt) {
  evt.preventDefault(); 

  const item = {name: imgName.value, link: imgLink.value};

  addCard(item);

  closePopup(popupAdd);

  imgName.value = '';
  imgLink.value = '';
  buttonSubAdd.setAttribute('disabled', 'disabled');
  buttonSubAdd.classList.add('button_type_sub_inactive');

}

formElementAdd.addEventListener('submit', addFormSubmit);

