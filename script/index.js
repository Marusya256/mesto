let buttonEdit = document.querySelector('.button_type_edit');
let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup-edit');
let buttonClose = document.querySelector('.button_type_close');

let userName = document.querySelector('.popup__input_user_name');
let userAbout = document.querySelector('.popup__input_user_about');

let infoName = document.querySelector('.profile__info-name');
let infoAbout = document.querySelector('.profile__info-about');

function openPopupEdit() {
    popupEdit.classList.add('popup_opened');

    userName.value = infoName.textContent;
    userAbout.value = infoAbout.textContent;

}

function closePopupEdit() {
    popupEdit.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', openPopupEdit);
buttonClose.addEventListener('click', closePopupEdit);



let formElement = document.querySelector('.popup__container'); 

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.


    infoName.textContent = userName.value;
    infoAbout.textContent = userAbout.value;

    closePopupEdit();

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


function addCard(item, index) {

    const cardContainer = document.querySelector('.gallery__list');

    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.gallery-item').cloneNode(true);

    cardElement.querySelector('.gallery-item__photo').src = initialCards[index].link;
    cardElement.querySelector('.gallery-item__text').textContent = initialCards[index].name;

    cardElement.querySelector('.button_type_like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('button_type_like_active');
    })                                                                                        

    cardContainer.append(cardElement);

    const buttonDelCard = cardElement.querySelector('.button_type_del');

    buttonDelCard.addEventListener('click', function () {
        gallery.shift(cardElement);
        let itemDel = buttonDelCard.closest('.gallery-item');   
        itemDel.remove();
    });

    let buttonOnImg = cardElement.querySelector('.gallery-item__photo');
    buttonOnImg.addEventListener('click', viewImg);

    return cardElement;

};


const gallery = initialCards.map(addCard);



let popupAdd = document.querySelector('.popup-add');

let imgName = document.querySelector('.popup__input_img_name');
let imgLink = document.querySelector('.popup__input_img_link');

let galleryText = document.querySelector('.gallery-item__text');
let galleryPhoto = document.querySelector('.gallery-item__photo');

let buttonCloseAdd = document.querySelector('.close-add');
let buttonAdd = document.querySelector('.button_type_add');

function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}

buttonAdd.addEventListener('click', openPopupAdd);
buttonCloseAdd.addEventListener('click', closePopupAdd);

let formElementAdd = document.querySelector('.popup-place'); 

function addFormSubmit (evt) {
    evt.preventDefault(); 
    const cardGallery = document.querySelector('.gallery__list');

    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.gallery-item').cloneNode(true);

    cardElement.querySelector('.gallery-item__text').textContent = imgName.value;
    cardElement.querySelector('.gallery-item__photo').src = imgLink.value;

    gallery.unshift(cardElement);
    cardGallery.prepend(cardElement);

    cardElement.querySelector('.button_type_like').addEventListener('click', function(evt) {
        evt.target.classList.toggle('button_type_like_active');
    }) 

    closePopupAdd();
    
    const buttonDelCard = cardElement.querySelector('.button_type_del');

    buttonDelCard.addEventListener('click', function () {
        gallery.shift(cardElement);
        let itemDel = buttonDelCard.closest('.gallery-item');   
        itemDel.remove();
    });

    let buttonOnImg = cardElement.querySelector('.gallery-item__photo');
    buttonOnImg.addEventListener('click', viewImg);

}

formElementAdd.addEventListener('submit', addFormSubmit);



let imgContainer = document.querySelector('.image-container');
let galleryItem = document.querySelector('.gallery-item');

function viewImg() {
    imgContainer.classList.add('image-container_active');
    
    imgContainer.querySelector('.image-container__photo').src = galleryItem.querySelector('.gallery-item__photo').src;
    imgContainer.querySelector('.image-container__name').textContent = galleryItem.querySelector('.gallery-item__text').textContent;
    
    let buttonCloseImg = document.querySelector('#close-img');

    buttonCloseImg.addEventListener('click', function () {
        imgContainer.classList.remove('image-container_active');
    });

}