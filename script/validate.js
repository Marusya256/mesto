const formsConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_sub',
  errorClass: 'popup__input_type_error',
  errorActive: 'popup__input-error_active',
  buttonSubInactive: 'button_type_sub_inactive'
};

const showInputError = (formsConfig, formElement, inputElement, errorMessage) => {
  const errorClass = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formsConfig.errorClass);
  errorClass.classList.add(formsConfig.errorActive);
  errorClass.textContent = errorMessage;
};

const hideInputError = (formsConfig, formElement, inputElement) => {
  const errorClass = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formsConfig.errorClass);
  errorClass.classList.remove(formsConfig.errorActive);
  errorClass.textContent = '';
};

const isValid = (formsConfig, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formsConfig, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formsConfig, formElement, inputElement);
  }
};

const setEventListeners = (formsConfig, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(formsConfig.inputSelector));
  const buttonElement = formElement.querySelector(formsConfig.submitButtonSelector);

  toggleButtonState(formsConfig, inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formsConfig, formElement, inputElement);
      toggleButtonState(formsConfig, inputList, buttonElement);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (formsConfig, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formsConfig.buttonSubInactive);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(formsConfig.buttonSubInactive);
    buttonElement.removeAttribute('disabled');
  }
};

const enableValidation = (formsConfig) => {
  const formList = Array.from(document.querySelectorAll(formsConfig.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formsConfig, formElement);
  });
};

enableValidation(formsConfig);


