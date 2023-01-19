let buttonEdit = document.querySelector('.button-edit');
let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.button-close');
let userName = infoname.textContent;
let aboutUser = infoabout.textContent;

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);



document.getElementById("username").value = userName;
document.getElementById("aboutuser").value = aboutUser;





let formElement = document.querySelector('.popup__container'); 
let nameInput = document.querySelector('.input-username'); 
let jobInput = document.querySelector('.input-aboutuser'); 

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    let nameU = nameInput.value;
    let jobU = jobInput.value;

    document.getElementById("infoname").textContent = nameU;
    document.getElementById("infoabout").textContent = jobU;

    popup.classList.remove('popup_opened');

}

formElement.addEventListener('submit', handleFormSubmit);