class FormValidator {
  constructor(formsConfig, form) {
    this._inputSelector = formsConfig.inputSelector;
    this._submitButtonSelector = formsConfig.submitButtonSelector;
    this._errorClass = formsConfig.errorClass;
    this._errorActive = formsConfig.errorActive;
    this._buttonSubInactive = formsConfig.buttonSubInactive;
    this._formElement = form;
    this._buttonTypeSubAdd = document.querySelector('.button_type_sub-add');
    this._buttonElement = form.querySelector('.button_type_sub');
  }

  enableValidation () {
    this._setEventListeners()
  };

  disableButton () {
    this._buttonTypeSubAdd.setAttribute('disabled', 'disabled');
    this._buttonTypeSubAdd.classList.add(this._buttonSubInactive);
  }

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
  
    this._toggleButtonState(inputList);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList);
      });
    });
  };
  
  _hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  
  _toggleButtonState (inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(this._buttonSubInactive);
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.remove(this._buttonSubInactive);
      this._buttonElement.removeAttribute('disabled');
    }
  };

}

export {FormValidator};

