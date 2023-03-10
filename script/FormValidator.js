class FormValidator {
  constructor(formsConfig, form) {
    this._formSelector = formsConfig.formSelector;
    this._inputSelector = formsConfig.inputSelector;
    this._submitButtonSelector = formsConfig.submitButtonSelector;
    this._errorClass = formsConfig.errorClass;
    this._errorActive = formsConfig.errorActive;
    this._buttonSubInactive = formsConfig.buttonSubInactive;
    this._formElement = form;
  }

  enableValidation () {
    this._setEventListeners(this._formElement)
  };

  _showInputError (inputElement, errorMessage) {
    const errorClass = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._errorClass);
    errorClass.classList.add(this._errorActive);
    errorClass.textContent = errorMessage;
  };

  _hideInputError (inputElement) {
    const errorClass = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._errorClass);
    errorClass.classList.remove(this._errorActive);
    errorClass.textContent = '';
  };

  _isValid (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _setEventListeners () {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  
    this._toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  
  _toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._buttonSubInactive);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(this._buttonSubInactive);
      buttonElement.removeAttribute('disabled');
    }
  };

}

export {FormValidator};

