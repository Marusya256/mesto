let buttonEdit = document.querySelector('.button_type_edit');
let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.button_type_close');

let userName = document.querySelector('.popup__input_user_name');
let userAbout = document.querySelector('.popup__input_user_about');

let infoName = document.querySelector('.profile__info-name');
let infoAbout = document.querySelector('.profile__info-about');

function openPopup() {
    popup.classList.add('popup_opened');

    userName.value = infoName.textContent;
    userAbout.value = infoAbout.textContent;

}

function closePopup() {
    popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);



let formElement = document.querySelector('.popup__container'); 

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.


    infoName.textContent = userName.value;
    infoAbout.textContent = userAbout.value;

    closePopup();

}

formElement.addEventListener('submit', handleFormSubmit);