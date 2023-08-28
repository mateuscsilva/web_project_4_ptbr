import Popup from "./Popup";

export default class PopupWithForms extends Popup{
 constructor({ formSelector, handleFormSubmit }){
  super(formSelector);
  this._handleFormSubmit = handleFormSubmit;
 }

 _getInputValues(){
  this._inputList = this._container.querySelectorAll(".form__input");
  this._formValues = {};
  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });
  return this._formValues;
 }

 setEventListeners(){
  super.setEventListeners();
  this._container.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this._element.reset();
  });
 }

 close(){
  super.close();
  //this._inputList = this._container.querySelectorAll(".form__input");
  //this._inputList.forEach(input => {
  //  input.value = "";
  //});
 }
}