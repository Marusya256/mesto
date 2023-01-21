let buttonEdit = document.querySelector('.button_type_edit');
let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.button_type_close');

function openPopup() {
    popup.classList.add('popup_opened');

    let userName = infoname.textContent;
    let aboutUser = infoabout.textContent;

    document.getElementById("username").value = userName;
    document.getElementById("aboutuser").value = aboutUser;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);



let formElement = document.querySelector('.popup__container'); 
let nameInput = document.querySelector('.popup__input_user_name'); 
let jobInput = document.querySelector('.popup__input_user_about'); 

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    let nameU = nameInput.value;
    let jobU = jobInput.value;

    document.getElementById("infoname").textContent = nameU;
    document.getElementById("infoabout").textContent = jobU;

    closePopup();

}

formElement.addEventListener('submit', handleFormSubmit);