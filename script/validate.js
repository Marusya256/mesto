const formsConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_sub'
};



const showInputError = (formSelector, inputSelector, errorMessage) => {
  const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('popup__input_type_error');
  errorClass.classList.add('popup__input-error_active');
  errorClass.textContent = errorMessage;
};


const hideInputError = (formSelector, inputSelector) => {
  const errorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  errorClass.classList.remove('popup__input-error_active');
  errorClass.textContent = '';
};


const isValid = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideInputError(formSelector, inputSelector);
  }
};


const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll(formsConfig.inputSelector));

  const buttonElement = formSelector.querySelector(formsConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);


  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      isValid(formSelector, inputSelector);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputSelector) => {
    return !inputSelector.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_type_sub_inactive');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('button_type_sub_inactive');
    buttonElement.removeAttribute('disabled');
  }
};


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(formsConfig.formSelector));

  formList.forEach((formSelector) => {
    setEventListeners(formSelector);
  });
};

enableValidation(formsConfig);




